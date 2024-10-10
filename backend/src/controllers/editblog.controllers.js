import mongoose from "mongoose";
import { blogModel } from "../models/blog.models.js";

export const editblog = (req,res)=>{
    console.log("edit called");
    console.log(req.body._id);
    blogModel.findByIdAndUpdate({_id: req.body._id},{title:' this is content 7.000000000000 '},{upsert: true}).then((response)=>{
        console.log("updated succesfully");
        console.log(response);
        
        res.json(response)
    }).catch((error)=>{
        console.log(error);
    })
}