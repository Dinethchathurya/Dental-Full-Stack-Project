import ContactUsModel from "../models/contactUsModel.js";

export const contactUsController = async (req, res) => {
    console.log("called ");
  const { name, email, message  } = req.body;
  try {

    const newMsg = new ContactUsModel({
      name,
      email,
      message
    });
    const savedMsg = await newMsg.save();

    res.json("message saved");
    console.log("message saved");
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }

};