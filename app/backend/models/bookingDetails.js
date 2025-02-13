

import mongoose from 'mongoose';


const bookingSchema = new mongoose.Schema({
    patientName : {
        type : String,
        required : true,
    },
    mobileNumber :{
        type : String,
        required : true,
    },
    emailAddress :{
        type : String,
        required : true,
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId, // Reference to Doctor model
        ref: 'Doctor',
        required: true,
      },
      service: {
        type: mongoose.Schema.Types.ObjectId, // Reference to Service model
        ref: 'services',
        required: true,
      },
      appointmentDate: {
        type: mongoose.Schema.Types.ObjectId, // Reference to Availabledate model
        ref: 'Availabledate',
        required: true,
      },
    price :{
        type : String,
        required : true,
    },
    payment: {
        type : Boolean,
        required : true
    }
});


const BookingModel = mongoose.model('Booking', bookingSchema);

export default BookingModel;