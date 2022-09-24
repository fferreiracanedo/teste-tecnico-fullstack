import "express-async-errors"
import express from 'express'
import cors from 'cors'
import handleError from './middleware/appError.middewares'
import userRoutes from './routes/user.routes'
import contactsRouter from './routes/contacts.routes'
const app = express()

app.use(express.json())
app.use(cors())
app.use('/users', userRoutes)
app.use('/contacts', contactsRouter)



app.use(handleError)



export default app

