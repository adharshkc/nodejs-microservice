import { NextFunction, Request, RequestHandler, Response } from "express"
import { AnyZodObject } from "zod"

export const validate = (schema:AnyZodObject):RequestHandler=>{
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(req.body)
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params
            });
             next();
        } catch (error: any) { 
             res.status(400).json({ error: error });
        }
    };
}