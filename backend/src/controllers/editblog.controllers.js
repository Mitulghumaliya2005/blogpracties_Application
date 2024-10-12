import mongoose from "mongoose";
import { blogModel } from "../models/blog.models.js";

export const editblog = (req, res) => {
    console.log("edit called");

    // acces using body
    // console.log(req.body.blog.title);


    // acces object using query 
    // const objected = JSON.parse(req.query.blog);
    // console.log(objected.title);

    const blog = req.body.blog

    blogModel.findByIdAndUpdate({ _id: blog._id }, { title: blog.title, content: blog.content }).then((response) => {
        console.log("updated succesfully");
        console.log(response);
        blogModel.find().then((response) => {
            res.json(response)
        })
    }).catch((error) => {
        console.log(error);
    })
}