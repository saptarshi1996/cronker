import { Request, Response } from "express"

import * as response from '../../helpers/response'

import * as cronDao from '../../dao/cron'

import ICron from "../../interfaces/models/cron"

import NotFoundError from "../../errors/NotFoundError"

export const listCron = async (_: Request, res: Response) => {
  try {
    const cronList = await cronDao.listAllCron({
      where: {
        deletedAt: null,
      },
      select: {
        id: true,
        name: true,
        isActive: true,
        cronExpression: true,
        requestUrl: true,
        requestMethod: true,
      },
    })
    return response.success({
      res,
      statusCode: 200,
      body: {
        crons: cronList,
      }
    })
  } catch (ex) {
    return response.error({
      res,
      ex,
    })
  }
}

export const getCron = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const cronFound = await cronDao.getCron({
      where: {
        id: +id,
      },
      select: {
        id: true,
        name: true,
        isActive: true,
        cronExpression: true,
        requestUrl: true,
        requestPayload: true,
        requestHeaders: true,
        requestMethod: true,
      },
    })

    if (!cronFound) {
      throw new NotFoundError('Cron does not exists')
    }

    return response.success({
      res,
      statusCode: 200,
      body: {
        cron: cronFound,
      }
    })
  } catch (ex) {
    return response.error({
      res,
      ex,
    })
  }
}

export const createCron = async (req: Request, res: Response) => {
  try {
    const cronPayload = await req.body as ICron
    await cronDao.createCron(cronPayload)

    return response.success({
      res,
      statusCode: 201,
      body: {
        message: 'Cron created successfully'
      }
    })
    return
  } catch (ex) {
    return response.error({
      res,
      ex,
    })
  }
}

export const updateCron = async (req: Request, res: Response) => {
  try {
    const cronPayload = await req.body as ICron
    const { id } = req.params
    const cronFound = await cronDao.getCron({
      where: {
        id: +id,
      },
      select: {
        id: true,
      },
    })

    if (!cronFound) {
      throw new NotFoundError('Cron does not exists')
    }
  
    await cronDao.updateCron({
      where: {
        id: +req.params.id,
      },
      data: cronPayload
    })

    return response.success({
      res,
      statusCode: 201,
      body: {
        message: 'Cron updated successfully'
      }
    })
  } catch (ex) {
    return response.error({
      res,
      ex,
    })
  }
}

export const deleteCron = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const cronFound = await cronDao.getCron({
      where: {
        id: +id,
      },
      select: {
        id: true,
      },
    })

    if (!cronFound) {
      throw new NotFoundError('Cron does not exists')
    }

    await cronDao.deleteCron({
      where: {
        id: +id,
      }
    })

    return response.success({
      res,
      statusCode: 201,
      body: {
        message: 'Cron deleted successfully'
      }
    })
  } catch (ex) {
    return response.error({
      res,
      ex,
    })
  }
}
