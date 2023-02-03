import { PrismaClient } from '@prisma/client'

const {
  cron: Cron,
} = new PrismaClient()

async function createCron(data: any) {
  try {
    const cron = await Cron.create({
      data,
    })

    return Promise.resolve(cron)
  } catch (ex: any) {
    return Promise.reject(new Error(ex))
  }
}

async function listCron(limit?: number, offset?: number) {
  try {
    const cron = await Cron.findMany({
      select: {
        id: true,
        name: true,
        method: true,
        url: true,
        cron_expression: true,
        headers: true,
        payload: true,
      },
      take: limit,
      skip: offset,
    })
    return Promise.resolve(cron)
  } catch(ex: any) {
    return Promise.reject(new Error(ex))
  }
}

async function getCron(id: number) {
  try {
    const cron = await Cron.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        method: true,
        url: true,
        cron_expression: true,
        headers: true,
        payload: true,
      },
    })

    return Promise.resolve(cron)
  } catch (ex: any) {
    return Promise.reject(new Error(ex))
  }
}

async function updateCron(id: number, data: any) {
  try {
    const cron = await Cron.update({
      where: { id },
      data,
    })

    return Promise.resolve(cron)
  } catch (ex: any) {
    return Promise.reject(new Error(ex))
  }
}

async function deleteCron(id: number) {
  try {
    await Cron.delete({
      where: { id },
    })

    return Promise.resolve({})
  } catch (ex: any) {
    return Promise.reject(new Error(ex))
  }
}

export default {
  getCron,
  createCron,
  listCron,
  deleteCron,
  updateCron,
}
