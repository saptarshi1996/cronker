import axios from 'axios'

import Worker from '../../config/bull'

import * as cronDao from '../../dao/cron'

Worker['SendRequestPost'].process(async (job: any, done: any) => {
  const {
    data,
    cronId,
  } = job.data
  const startedAt = new Date()
  try {
    const response = await axios.post(data)
    const completedAt = new Date()

    await cronDao.createCronLog({
      response: JSON.stringify(response.data),
      status: 'SUCCESS',
      startedAt,
      completedAt,
      cronId: cronId,
    })

    done()
  } catch (ex: any) {
    const completedAt = new Date()
    await cronDao.createCronLog({
      response: JSON.stringify({
        response: JSON.stringify(ex.response),
        stack: JSON.stringify(ex.stack)
      }),
      status: 'FAILED',
      startedAt,
      completedAt,
      cronId: cronId,
    })
    done(ex)
  }
})
