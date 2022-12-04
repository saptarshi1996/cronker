import { PrismaClient } from '@prisma/client'

import ICron from '../interfaces/models/cron'

const {
  cron: Cron,
} = new PrismaClient()

export const listAllCron = ({
  select,
  where,
}: {
  select: Record<string, unknown>
  where: Record<string, unknown>
}) => new Promise(async (resolve, reject) => {
  try {
    const cronList = await Cron.findMany({
      where,
      select,
    }) as ICron[]

    resolve(cronList)
  } catch (ex: any) {
    reject(new Error(ex.message))
  }
})

export const getCron = ({
  select,
  where,
}: {
  select: Record<string, unknown>
  where: Record<string, unknown>
}) => new Promise(async (resolve, reject) => {
  try {
    const cronFound = await Cron.findFirst({
      where,
      select,
    }) as ICron

    resolve(cronFound)
  } catch (ex: any) {
    reject(new Error(ex.message))
  }
})

export const createCron = (data: ICron) => new Promise(async (resolve, reject) => {
  try {
    const cronCreated = await Cron.create({
      data: data as any,
    })
    resolve(cronCreated)
  } catch (ex: any) {
    reject(new Error(ex.message))
  }
})

export const updateCron = ({
  data,
  where,
}: {
  data: ICron,
  where: Record<string, unknown>,
}) => new Promise(async (resolve, reject) => {
  try {
    await Cron.update({
      where,
      data: data as any,
    })

    resolve({})
  } catch (ex: any) {
    reject(new Error(ex.message))
  }
})

export const deleteCron = ({
  where,
}: {
  where: Record<string, unknown>,
}) => new Promise(async (resolve, reject) => {
  try {
    await Cron.delete({
      where,
    })
    resolve({})
  } catch (ex: any) {
    reject(new Error(ex.message))
  }
})
