import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name: {
        type : String,
        required :true,
        unique: true,
    },
    price: {
        type : String,
        required :true,
        unique: true,
    },
});

const serviceModel = mongoose.model('services', serviceSchema);

export default serviceModel;