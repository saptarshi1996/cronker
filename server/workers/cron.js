const axios = require('axios');

const CronQueue = require('../config/bull');

const cronLogDao = require('../dao/logs');

CronQueue.process(async (job, done) => {
  try {
    const {
      id,
      requestMethod,
      requestUrl,
      requestPayload,
    } = job.data;

    const started = new Date();

    let response;
    switch (requestMethod) {
      case 'GET':
        response = await axios.get(requestUrl);
        break;

      case 'POST': {
        const payload = JSON.parse(requestPayload);
        response = await axios.post(requestUrl, payload);
        break;
      }
      default:
        break;
    }

    const completed = new Date();

    await cronLogDao.createLog({
      status: 'SUCCESS',
      started,
      completed,
      response: response.data,
      cronId: id,
    });

    done();
  } catch (ex) {
    console.log(ex);
    done(ex);
  }
});
