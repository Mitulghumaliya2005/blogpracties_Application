import express from 'express'
import cors from 'cors';
const app = express()

app.use(cors())
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

// import routes
import fetchroutes from './routes/fetchblogs.routes.js'
import addblogroutes from './routes/addblog.routes.js';
import deleteblogroutes from './routes/deleteblog.routes.js';
import editblogrouter from './routes/editblog.routes.js';
import replaeblogrouter from './routes/replaceblog.routes.js';


// routes declaration
app.use("",fetchroutes)
app.use("/api/v1",addblogroutes)
app.use("/api/v2",deleteblogroutes)
app.use("/api/v3",editblogrouter)
app.use("/api/v4",replaeblogrouter)

export { app }