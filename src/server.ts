import app from './app'
import { prisma } from "./prisma/script"

const port = process.env.PORT || 4000

async function bootStrap() {
  await prisma.$connect()

  app.listen(port, () => {
    console.log(`Server running at por ${port}`)
  })
}

bootStrap()