import mongoose from "mongoose";
const imageUploadSchema=new mongoose.Schema({
    image:{
        type:String
    }
})
// export const ImageUpload=mongoose.model("ImageUpload",imageUploadSchema);//import {ImageUpload} from '../models/imageUpload.js'
const ImageUpload=mongoose.model("ImageUpload",imageUploadSchema);
export default ImageUpload;//const ImageUpload=mongoose.model("ImageUpload",imageUploadSchema);