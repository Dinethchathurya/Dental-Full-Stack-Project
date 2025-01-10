import mongoose from 'mongoose';


const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
  }
});


const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;