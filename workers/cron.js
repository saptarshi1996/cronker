const axios = require('axios');

const CronQueue = require('../config/bull');

const cronDao = require('../dao/cron');

CronQueue.process(async (job, done) => {
  try {

    const {
      name,
      requestMethod,
      requestUrl,
      requestPayload,
    } = job.data;

    let response;
    switch (requestMethod) {
      case 'GET':
        response = await axios.get(requestUrl);
      break;

      case 'POST':
        const payload = JSON.parse(requestPayload);
        response = await axios.post(requestUrl, payload);
      break;
    }

    console.log('response for ', name);
    console.log(response);

    done();

  } catch (ex) {
    console.log(ex);
    done(ex);
  }
});
