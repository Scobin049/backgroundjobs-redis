import 'dotenv/config'
import express from 'express'
import { router } from './routes'
import BullBoard from './config/bullboard'

const app = express()

app.use(express.json())
app.use('/admin/queues', BullBoard);
app.use(router)

export  { app }