import mongoose from "mongoose";
import { blogModel } from "../models/blog.models.js";


export const deleteblog = (req, res) => {
    console.log("Delete Called");
    blogModel.findByIdAndDelete({ _id: req.query._id }).then((response) => {
        console.log(response);
        blogModel.find().then((response) => {
            res.json(response)
        })
    }).catch((error) => {
        console.log(error);
    })
}