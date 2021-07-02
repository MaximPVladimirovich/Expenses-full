import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import userRoutes from "./routes/user-routes"
import authRoutes from "./routes/auth-routes"

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())
// app.use(bodyParser.json())

app.use("/", userRoutes)
app.use("/", authRoutes)


/* Configure express */

app.use((error, req, res, next) => {
  if (error.name === 'UnauthorizedError') {
    res.status(401).json({ "error": error.name + ": " + error.message })
  } else if (error) {
    res.status(400).json({ "error": error.name + ": " + error.message })
    console.log(error)
  }
})

export default app