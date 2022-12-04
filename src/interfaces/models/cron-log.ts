export default interface ICronLog {
  id?: number

  response?: string

  status?: string

  startedAt?: Date
  completedAt?: Date

  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date

  cronId?: number
}
