import Availabledate from "../models/availableDate.js";
import Doctor from "../models/doctorModel.js"; 
import serviceModel from "../models/services.js";
import Stripe from "stripe";
import BookingModel from "../models/bookingDetails.js"
const stripe = new Stripe('sk_test_51Qg5RMRbw5Znp41bpA9rmVFmJ5UVN3um7rCq0ilKgbr2KtcP60Rz0CTMOc7jncIC20D34ZV1hTpWZNX2IU4tONct00scAwd6Te');

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

export const SaveBookingDetails = async (req, res) => {
  const { patientName, mobileNumber, emailAddress, doctor, service, appointmentDate, price } = req.body;

  try {
    // Check if the booking already exists based on unique details
    const updatedBooking = await BookingModel.findOneAndUpdate(
      { patientName: patientName, mobileNumber: mobileNumber, emailAddress:emailAddress, doctor:doctor, service:service, appointmentDate:appointmentDate, price:price},  // Find the document using email and appointment date
      { $set: { payment: true } }, // Update the payment field to true
      { new: true } // Return the updated document
    );

    if (updatedBooking) {
      console.log(updatedBooking);
    }


  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving booking." });
  }
};
