import ICronLog from "./cron-log"

export default interface ICron {
  id?: number

  name?: string
  cronExpression?: string

  requestMethod?: string
  requestUrl?: string
  requestPayload?: string
  requestHeaders?: string

  isActive?: Boolean

  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date

  cronLogs?: ICronLog[]
}
