export default interface ICron {
  id?: number
  name?: string
  method?: string
  url?: string
  payload?: string
  headers?: string
  cron_expression?: string

  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}
