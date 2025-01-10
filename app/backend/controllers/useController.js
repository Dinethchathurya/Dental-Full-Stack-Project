import Availabledate from "../models/availableDate.js";
import Doctor from "../models/doctorModel.js"; 
import serviceModel from "../models/services.js";

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