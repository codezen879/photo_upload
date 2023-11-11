import express from 'express'
import ImageUpload from '../models/imageUpload.js'
export const imageCreate=async(req,res)=>{
    console.log("hio");
    try{
        const{image}=req.body;
        const newImage=await ImageUpload.create({image});
        res.status(200).json({message:"Image uploaded sucessfully ",image:newImage})
    }
    catch(err){
        res.status(500).json({message:err})
    }
}
export const imageGet=async(req,res)=>{
    console.log('2');
    try{
        const {id}=req.params;
        const image=await ImageUpload.findById(id);
        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
          }
      
          // Convert the binary image data to base64 for sending to the client
          const base64Image = image.image.toString('base64');
      
          res.status(200).json({ image: base64Image });
    }
    catch(err){
        res.status(500).json({message:err})
    }
}
