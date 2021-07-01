import express from 'express'
// import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import userRoutes from "./routes/user-routes"

const app = express()

// app.use(bodyParser())
// app.use(bodyParser.urlencoded({ extended: true }))
app.use("/", userRoutes)
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

/* Configure express */

export default app