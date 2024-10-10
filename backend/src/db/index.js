import mongoose from "mongoose";

async function connectDB() {
    try {
        // console.log(process.env.DB_NAME);
        mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`)
        console.log("Connections SuccessFully");
        
    } catch (error) {
        console.log(error);
    }
}

export { connectDB }