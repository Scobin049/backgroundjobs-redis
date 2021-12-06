import { Request, Response } from "express";
import Mail from "../lib/Mail";
import Queue from "../lib/Queue";

export default {
  async store(req: Request, res: Response) {
    const {name, email, password} = req.body
    
    const user = {
      name,
      email,
      password
    }

    //Add job RegistrationMail in queue
    await Queue.add('RegistrationMail', {user})

    return res.json(user)
  } 
}