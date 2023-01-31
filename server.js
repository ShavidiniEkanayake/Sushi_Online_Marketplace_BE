require('dotenv').config()
import express from 'express'
import cors from 'cors'
import connectDB from './config/db'
import routes from './routes/index.routes'
import { isCelebrateError } from 'celebrate'
import { makeResponse } from './utils/response'
import logger from './utils/logger'

const app = express();

//Connect Database
connectDB();

//Using Cors
app.use(cors());

app.use(express.json({ extended: false }));

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => res.send("Online shoping System Backend Api Running"));

app.use('/api', routes)

app.use((err, req, res, next) => {
    logger.error(`Error: ${err.message} | Request Path - ${req.path} | Stack: ${err.stack}`, {
      payload: req.body,
      headers: req.headers,
      query: req.query
    })
    if (isCelebrateError(err)) {
      for (const [key, value] of err.details.entries()) {
        return makeResponse({ res, status: 422, message: value.details[0].message })
      }
    } else if (err.expose) {
      return makeResponse({ res, status: err.status, message: err.message })
    } else if (err.name == 'MongoServerError' && err.code === 11000) {
      const key = Object.keys(err.keyValue)[0]
      return makeResponse({ res, status: 400, message: `The ${key} ${err.keyValue[key]} is already taken` })
    } else
      return makeResponse({
        res,
        status: 500,
        message: "Just patching things up. This'll be over in a jiffy!"
      })
  })


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));