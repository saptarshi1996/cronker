import { Request, ResponseToolkit } from "@hapi/hapi"

import ICron from "../interfaces/models/cron"

import cronDao from "../dao/cron"

import NotFoundError from "../errors/NotFoundError"
import InternalServerError from "../errors/InternalServer"

export async function listCron(req: Request, h: ResponseToolkit) {
  try {
    const cron = await cronDao.listCron()
    return {
      cron,
    }
  } catch (ex: any) {
    return new InternalServerError(ex.message)
  }
}

export async function createCron(req: any, h: ResponseToolkit) {
  try {

    const cron = req.payload as ICron

    await cronDao.createCron(cron)

    return {
      'message': 'Cron created successfully',
    }
  } catch (ex: any) {
    return new InternalServerError(ex.message)
  }
}

export async function getCron(req: Request, h: ResponseToolkit) {
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

export async function updateCron(req: Request, h: ResponseToolkit) {
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

export async function deleteCron(req: Request, h: ResponseToolkit) {
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
