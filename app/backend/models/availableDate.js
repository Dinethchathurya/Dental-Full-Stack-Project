import mongoose from 'mongoose';


const availabledateSchema = new mongoose.Schema({
  doctor_id: {
    type: String,
    required: true,
  },
  date: {
    type:Date,
    required: true,
  }

});


const Availabledate = mongoose.model('Availabledate', availabledateSchema);

export default Availabledate;