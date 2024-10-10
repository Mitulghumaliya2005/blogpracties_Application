import "dotenv/config"
import { connectDB } from "./db/index.js"
import { app } from "./app.js";


connectDB().then((response)=>{
    // console.log(response);
    app.listen(process.env.PORT,()=>{
        console.log(`Applications listen on port ${process.env.PORT}`);
    })
}).catch((error)=>{
    throw new error
})