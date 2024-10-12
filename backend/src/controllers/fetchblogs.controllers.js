import mongoose from "mongoose";
import { blogModel } from "../models/blog.models.js";

export const fetchblogs = (req, res) => {
    // console.log("Hello I am fetch data");
    blogModel.find().then((response)=>{
        res.json(response)
    }).catch((error)=>{
        console.log(error);
        res.json(error)
    })
}