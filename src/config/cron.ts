import schedule from 'node-schedule'

import axios, { AxiosRequestConfig } from 'axios'

import * as cronDao from '../dao/cron'

import ICron from '../interfaces/models/cron'

import * as queueHelper from '../helpers/queue'

export default async function () {
  try {
    const cronList = await cronDao.listAllCron({
      where: {
        isActive: true,
      },
      select: {
        cronExpression: true,
        requestPayload: true,
        requestMethod: true,
        requestUrl: true,
      },
    }) as ICron[]

    cronList.map((cron) => {
      schedule.scheduleJob(cron.cronExpression as string, async () => {
        const payload = {
          method: cron.requestMethod,
          url: cron.requestUrl,
        } as AxiosRequestConfig

        const addPayloadFor = ['POST', 'PUT']

        if (addPayloadFor.includes(cron.requestMethod as string)) {
          const data = JSON.parse(cron.requestPayload as string)
          payload.data = data
        }

        let queueKeyValue: Record<string, string> = {
          'POST': 'SendRequestPost',
          'GET': 'SendRequestGet',
          'PUT': 'SendRequestPut',
          'DELETE': 'SendRequestDelete',
        }

        const queueName = queueKeyValue[cron.requestMethod as string]
        queueHelper.sendMessageToQueue({
          name: queueName,
          data: payload,
        })

        const response = await axios(payload)
        console.log(response.data)
      })
    })
  } catch (ex: any) {
    console.log(ex.stack)
  }
}
