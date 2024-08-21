import SelectedTextModel from "../models/selectedTextModel.js";

export const getAllTexts =async(req, res)=>{
try {
    const texts= await SelectedTextModel.find();
    res.status(201).json({message:"Success", selectedTexts: texts})
} catch (error) {
    res.status(500).json({message:error.message})
}
}
export const createText = async (req, res) => {
    const text= new SelectedTextModel({
        text: req.body.text,
    })
    try {
    const addText = await text.save();
    res.status(201).json({ message: "Text Added"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};