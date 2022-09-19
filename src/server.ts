import app from './app'
import { prisma } from "./prisma/script"


async function bootStrap() {
  await prisma.$connect()

  app.listen(4000, () => {
    console.log("Server is Running on Port 4000 ")
  })
}

bootStrap()