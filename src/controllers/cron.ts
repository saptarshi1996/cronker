import { Request } from "@hapi/hapi"

import cronDao from "../dao/cron"

import ICron from "../interfaces/models/cron"

import NotFoundError from "../errors/NotFoundError"
import InternalServerError from "../errors/InternalServer"

export async function listCron(req: Request) {
  try {
    const { limit, offset } = req.query as {
      limit: number,
      offset: number,
    }
    const cron = await cronDao.listCron(limit, offset)
    return {
      cron,
    }
  } catch (ex: any) {
    return new InternalServerError(ex.message)
  }
}

export async function createCron(req: Request) {
  try {
    const cron = req.payload as ICron
    const newCron = await cronDao.createCron(cron)

    return {
      'message': 'Cron created successfully',
      'cron': newCron,
    }
  } catch (ex: any) {
    return new InternalServerError(ex.message)
  }
}

export async function getCron(req: Request) {
  try {
    const { cron_id: cronId } = req.params as {
      cron_id: number,
    }

    const cron = await cronDao.getCron(cronId)
    if (!cron) {
      return new NotFoundError('Cron does not exists')
    }

    return {
      cron,
    }
  } catch (ex: any) {
    return new InternalServerError(ex.message)
  }
}
  
export async function updateCron(req: Request) {
  try {
    const cron = req.payload as ICron
    
    const { cron_id: cronId } = req.params as {
      cron_id: number,
    }

    const cronExists = await cronDao.getCron(cronId)
    if (!cronExists) {
      return new NotFoundError('Cron does not exists')
    }

    await cronDao.updateCron(cronId, cron)

    return {
      'message': 'Cron updated successfully',
    }
  } catch (ex: any) {
    return new InternalServerError(ex.message)
  }
}

export async function deleteCron(req: Request) {
  try {
    const { cron_id: cronId } = req.params as {
      cron_id: number,
    }

    const cron = await cronDao.getCron(cronId)
    if (!cron) {
      return new NotFoundError('Cron does not exists')
    }

    await cronDao.deleteCron(cronId)

    return {
      'message': 'Cron deleted successfully',
    }
  } catch (ex: any) {
    return new InternalServerError(ex.message)
  }
}
