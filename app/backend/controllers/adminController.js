import DoctorModel from "../models/doctorModel.js"

export const AdminAddNewDoctor = async (req, res) => {
    const {doctorName, doctorSpecialty, doctorRegistration} = req.body;
    console.log(req.body);
    try {
        const newDoctor = new DoctorModel({
            name : doctorName, 
            specialty : doctorSpecialty,
            registrationNumber : doctorRegistration,
        });

        const newOne = await newDoctor.save();
        console.log("Doctor registerd");
        res.json("Doctor registerd");

      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

export const AdminGetDoctors = async (req, res) => {

    try {
        const doctors = await DoctorModel.find();
        if (doctors) {
            res.json(doctors);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }

};