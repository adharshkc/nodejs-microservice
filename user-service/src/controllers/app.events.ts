import { NextFunction, Request, Response } from "express"

export const appEvents = (app:any)=>{
    app.use('/app-events', async (req:Request, res:Response, next:NextFunction)=>{
        const {payload} = req.body

        // SubscribeEvent(payload)
        console.log(payload)
    })
}