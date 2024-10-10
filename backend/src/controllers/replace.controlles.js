import mongoose from "mongoose";
import { blogModel } from "../models/blog.models.js";

export const replaceblog = (req, res) => {
    console.log("Replace successfully")
    console.log(req.body._id);

    // res.json("Replace b;l0g")
    blogModel.findOneAndReplace({ title: req.body.title }, {
        title: "lodu bhai kem chho",
        content: "i am the lodu content 1",
    }).then((reponse) => {
        res.json(reponse)
    }).catch((err) => {
        console.log(err);
    })
}