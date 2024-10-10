import mongoose from "mongoose";
import { blogModel } from "../models/blog.models.js";


export const addblog = (req,res)=>{
    console.log("Hello");
    console.log(req.body.title);
    console.log(req.body.content);
    blogModel.create({title:req.body.title,content: req.body.content,}).then((response)=>{
        // const blog = blogModel({
        //     title:req.body.title,
        //     content: req.body.content,
        // })
        // blog.save();
        console.log(response);
        res.json(response)
    }).catch((err)=>{
        console.log(err);
    })
}