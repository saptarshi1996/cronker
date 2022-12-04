import Express from 'express'

import environment from '../config/environment'

const {
  HOST,
  WORKER_PORT,
} = environment

const app = Express()

app.listen(WORKER_PORT, HOST, () => console.log('Worker Server on PORT', WORKER_PORT))
