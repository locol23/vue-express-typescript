import express from 'express'
import { Request, Response } from 'express'

export const loginRouter = express.Router()

loginRouter.get('/login', (_: Request, res: Response) => {
  const id: string = '12345'
  res.send({ id })
})
