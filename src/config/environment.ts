import { config } from 'dotenv'
config()

export default {
  PORT: +(process.env.PORT as string),
  HOST: process.env.HOST,
} as {
  PORT: number,
  HOST: string,
}
