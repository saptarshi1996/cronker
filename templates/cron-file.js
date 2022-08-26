const FILE = (cron) => 
`const nodeSchedule = require('node-schedule');
const CronQueue = require('../config/bull');

nodeSchedule.scheduleJob('${cron.cronExpression}', () => {
  CronQueue.add(${JSON.stringify(cron)});
});
`;

module.exports = FILE;
