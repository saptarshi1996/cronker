const { PrismaClient } = require('../../prisma/generated');
const { cron } = new PrismaClient();

exports.createCron = ({
  name,
  cronExpression,
  requestMethod,
  requestUrl,
  requestPayload,
}) => new Promise(async (resolve, reject) => {
  try {
    const created = await cron.create({
      data: {
        name,
        cronExpression,
        requestMethod,
        requestUrl,
        requestPayload,
      }
    });
    resolve(created);
  } catch(ex) {
    reject(new Error(ex.message));
  }
});

exports.updateCron = ({
  id,
  name,
  cronExpression,
  isActive,
}) => new Promise(async (resolve, reject) => {
  try {

    const data = {};
    if (name) data.name = name;
    if (cronExpression) data.cronExpression = cronExpression;
    if (isActive !== undefined) data.isActive = isActive;

    const updated = await cron.update({
      data,
      where: {
        id: +id,
      },
    });

    resolve(updated);
  } catch (ex) {
    reject(new Error(ex.message));
  }
});

exports.deleteCron = (id) => new Promise(async (resolve, reject) => {
  try {
    const deleted = await cron.delete({
      where: {
        id: +id,
      }
    });

    resolve(deleted);
  } catch (ex) {
    console.log(ex.name);
    reject(new Error(ex.message));
  }
});

exports.listCron = (isActive) => new Promise(async (resolve, reject) => {
  try {

    let where = {};

    if (isActive !== undefined) where.isActive = isActive;

    const crons = await cron.findMany({
      select: {
        id: true,
        name: true,
        cronExpression: true,
        requestMethod: true,
        requestUrl: true,
        requestPayload: true,
        isActive: true,
      },
      where: where,
    });

    resolve(crons);

  } catch (ex) {
    reject(new Error(ex.message));
  }
});

exports.getCronByName = (name) => new Promise(async (resolve, reject) => {
    try{

    const cronDetails = await cron.findFirst({
      where: {
        name,
      },
      select: {
        id: true,
      },
    });

    console.log(cronDetails);

    resolve(cronDetails);

  } catch (ex) {
    reject(new Error(ex.message));
  }
});

exports.getCronById = (id) => new Promise(async (resolve, reject) => {
  try{

    const cronDetails = await cron.findFirst({
      where: {
        id: +id,
      },
      select: {
        id: true,
        name: true,
        cronExpression: true,
        requestMethod: true,
        requestUrl: true,
        requestPayload: true,
        isActive: true,
      },
    });

    resolve(cronDetails);

  } catch (ex) {
    reject(new Error(ex.message));
  }
});
