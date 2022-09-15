const { PrismaClient } = require('../../prisma/generated');

const { cronLog } = new PrismaClient();

exports.createLog = ({
  response,
  status,
  started,
  completed,
  cronId,
}) => new Promise(async (resolve, reject) => {
  try {
    const created = await cronLog.create({
      data: {
        response,
        started,
        status,
        completed,
        cronId,
      }
    });

    resolve(created);
  } catch (ex) {
    reject(new Error(ex.message));
  }
});

exports.clearLogs = ({
  cronId,
}) => new Promise(async (resolve, reject) => {
  try {
    const res = await cronLog.deleteMany({
      where: {
        cronId,
      }
    });
    resolve(res);
  } catch (ex) {
    reject(new Error(ex.message));
  }
});

exports.getLogs = ({
  cronId,
}) => new Promise(async (resolve, reject) => {
  try {
    const crons = await cronLog.findMany({
      where: {
        cronId,
      },
      select: {
        id: true,
      },
    });

    resolve(crons);
  } catch (ex) {
    reject(new Error(ex.message));
  }
});
