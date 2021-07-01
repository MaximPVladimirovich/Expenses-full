const express = require(`express`)
import devBundle from './devBundle'
const app = express()
import template from './../template'
const mongoose = require(`mongoose`)
devBundle.compile(app)

import path from 'path'
const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR,
  'dists')))

// Mongoose connection
let DB_url = process.env.MONGODB_URI;
let database = mongoose.connection;
mongoose.connect(DB_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

// Check db connection 
database.on(`error`, console.error.bind(console, `connection error`));
database.once(`open`, function () {
  console.log(`connected to db`)
})


app.get(`/`, function (req, res) {
  res.status(200).send(template)
})

// Listen on port
let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err)
  }
  console.info(`Server started on port %s.`, port)
})