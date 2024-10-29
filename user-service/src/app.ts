import express from 'express'
import 'dotenv/config'
import userRoutes from "./routes/user.routes"
import bodyParser from 'body-parser'

const app = express()

const port = process.env.PORT 
console.log(port)
app.use(bodyParser.json())
app.use('/',userRoutes)

app.listen(port, ()=>{
    console.log("server started on "+port)
})

export default app;