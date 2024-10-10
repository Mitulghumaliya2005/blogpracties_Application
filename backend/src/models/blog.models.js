import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        requried: true,
    },
    content:{
        type: String,
        requried: true,
    }
},{
    timestamps: true,
})

export const blogModel = mongoose.model("blogModel",blogSchema); 