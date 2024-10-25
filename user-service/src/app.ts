import express from 'express'
import 'dotenv/config'
import userRoutes from "./routes/user.routes"

const app = express()

const port = process.env.PORT 
console.log(port)

app.use('/',userRoutes)

app.listen(port, ()=>{
    console.log("server started on "+port)
})