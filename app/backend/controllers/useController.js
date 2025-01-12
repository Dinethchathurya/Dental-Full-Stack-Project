import Availabledate from "../models/availableDate.js";
import Doctor from "../models/doctorModel.js"; 
import serviceModel from "../models/services.js";
import Stripe from "stripe";
import BookingModel from "../models/bookingDetails.js"
import wss from "../config/webSocket.js";
const stripe = new Stripe('sk_test_51Qg5RMRbw5Znp41bpA9rmVFmJ5UVN3um7rCq0ilKgbr2KtcP60Rz0CTMOc7jncIC20D34ZV1hTpWZNX2IU4tONct00scAwd6Te');

// web socket controllers / logics 

const broadcastBookingUpdate = (data) => {
  wss.clients.forEach((client) => {
    if (client.readyState === client.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
};
export const connectWebSocket = () => {
  
  wss.on('connection', (ws) => {
    console.log("A client connected to the WebSocket server.");

    sendCurrentBookings(ws);

    ws.on('message', (message) => {
      console.log("Received message from client:", message);
    });

    ws.on('close', () => {
      console.log('Client disconnected from WebSocket server');
    });
  });
};

const sendCurrentBookings = async (ws) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  try {
    const bookings = await BookingModel.find()
      .populate('doctor')
      .populate('service')
      .populate('appointmentDate');
    
    const futureBookings = bookings.filter(booking => {
      const appointmentDate = new Date(booking.appointmentDate.date);
      return appointmentDate >= today && booking.payment === true;
    });

    const bookingCountsByDate = futureBookings.reduce((acc, booking) => {
      const appointmentDate = new Date(booking.appointmentDate.date).toISOString().split('T')[0];  // Format date as 'YYYY-MM-DD'
      const doctorName = booking.doctor.name;

      if (!acc[appointmentDate]) {
        acc[appointmentDate] = {};
      }

      acc[appointmentDate][doctorName] = (acc[appointmentDate][doctorName] || 0) + 1;
      return acc;
    }, {});

    if (ws.readyState === ws.OPEN) {
      ws.send(JSON.stringify(bookingCountsByDate));
      console.log("Booking counts sent to client:", bookingCountsByDate);
    }

  } catch (error) {
    console.error("Error fetching bookings:", error);
  }
};

export const SaveBookingDetails = async (req, res) => {
  const { patientName, mobileNumber, emailAddress, doctor, service, appointmentDate, price } = req.body;

  try {
    const updatedBooking = await BookingModel.findOneAndUpdate(
      { patientName, mobileNumber, emailAddress, doctor, service, appointmentDate, price },
      { $set: { payment: true } },
      { new: true }
    );

    if (updatedBooking) {
      console.log("Booking saved successfully");

      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const bookings = await BookingModel.find()
        .populate('doctor')
        .populate('service')
        .populate('appointmentDate');
      
      const futureBookings = bookings.filter(booking => {
        const appointmentDate = new Date(booking.appointmentDate.date);
        return appointmentDate >= today && booking.payment === true;
      });

      const bookingCountsByDate = futureBookings.reduce((acc, booking) => {
        const appointmentDate = new Date(booking.appointmentDate.date).toISOString().split('T')[0];  // Format date as 'YYYY-MM-DD'
        const doctorName = booking.doctor.name;

        if (!acc[appointmentDate]) {
          acc[appointmentDate] = {};
        }

        acc[appointmentDate][doctorName] = (acc[appointmentDate][doctorName] || 0) + 1;
        return acc;
      }, {});

      broadcastBookingUpdate(bookingCountsByDate);
      res.status(200).json({ message: "Booking saved and updates broadcasted successfully." });
    } else {
      res.status(404).json({ message: "Booking not found." });
    }

  } catch (error) {
    console.error("Error saving booking:", error);
    res.status(500).json({ message: "Error saving booking." });
  }
};

// normal controllers 

export const GetAvailableDates = async (req, res) => {
    try {
      const dates = await Availabledate.find();
      const today = new Date();
      today.setHours(0, 0, 0, 0); 
  
      const enhancedDates = await Promise.all(
        dates
          .filter((entry) => new Date(entry.date) >= today) 
          .map(async (entry) => {
            const doctor = await Doctor.findById(entry.doctor_id);
  
            return {
              _id: entry._id,
              date: entry.date,
              doctorName: doctor ? doctor.name : "Unknown",
              doctorId: entry.doctor_id,
            };
          })
      );
  
      res.json(enhancedDates);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
};

export const GetServices = async (req, res) => {
    try {
        const services = await serviceModel.find();
        if (services) {
            res.json(services);
        }
        
    } catch (error) {
        console.log(error);
    }
};

export const CreateaPymentIntent = async (req, res) => {
  const { selectedPrice, patientName, mobileNumber, emailAddress, doctor, service, appointmentDate, price } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(Number(selectedPrice) * 100),
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    console.log("done" );
  
    const newBooking = new BookingModel({
      patientName,
      mobileNumber,
      emailAddress,
      doctor,
      service,
      appointmentDate,
      price: selectedPrice,
      payment : false,
    });

    const saved = await newBooking.save();

    if (saved) {
      console.log("book was added");
    }

    res.send({
      clientSecret: paymentIntent.client_secret,
    });

  } catch (error) {
    res.status(500).send({ error: error.message });
    console.log(error);
  }
};

export const GetDoctors = async (req, res) => {

  try {
      const doctors = await Doctor.find();
      if (doctors) {
          res.json(doctors);
      }
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
  }
};

export const GetBookingsToCheckAvailability = async (req, res) => {
  try {
    const today = new Date(); 
    today.setHours(0, 0, 0, 0); 
 
    const bookings = await BookingModel.find()
      .populate('doctor')
      .populate('service')
      .populate('appointmentDate');
    
    const futureBookings = bookings.filter(booking => {
      const appointmentDate = new Date(booking.appointmentDate.date); 
      return appointmentDate >= today && booking.payment === true;
    });

    if (futureBookings.length > 0) {
      console.log(futureBookings);
      res.json(futureBookings);
    } else {
      res.status(404).json({ message: 'No available bookings for today or future dates.' });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching bookings.' });
  }
};

