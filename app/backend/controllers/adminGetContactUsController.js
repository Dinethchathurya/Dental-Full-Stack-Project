import ContactUsModel from "../models/contactUsModel.js";

export const AdminGetcontactUsController = async (req, res) => {
    try {
        const messages = await ContactUsModel.find(); // Retrieve all messages
        res.json(messages);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

