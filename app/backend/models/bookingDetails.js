

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
    doctor :{
        type : String,
        required : true,
    },
    service :{
        type : String,
        required : true,
    },
    appointmentDate :{
        type : String,
        required : true,
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