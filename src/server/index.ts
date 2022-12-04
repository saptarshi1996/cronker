import Express from 'express'

import loader from "../config/cron"

import environment from '../config/environment'

import cronRoute from './routes/cron'

loader()

const {
  HOST,
  API_PORT,
} = environment

const app = Express()

app.use(Express.json())
app.use(Express.urlencoded({
  extended: false
}))

app.use(cronRoute)

app.listen(API_PORT, HOST, () => console.log('Server on PORT', API_PORT))
