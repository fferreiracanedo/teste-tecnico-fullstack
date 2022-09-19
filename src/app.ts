import express from 'express'
import { Request, Response } from 'express'
import { request } from 'http'


const app = express()
app.use(express.json())



app.listen(4000)

