import mongoose from "mongoose";
import { blogModel } from "../models/blog.models.js";


export const addblog = (req, res) => {
    console.log(req.query.title);

    blogModel.create({ title: req.query.title, content: req.query.content, })
        .then((response) => {
            console.log(response);
            blogModel.find().then((response) => {
                res.json(response)
            })
            // res.json(response)
        }).catch((err) => {
            console.log(err);
            res.json(err)
        })
}