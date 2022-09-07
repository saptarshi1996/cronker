const FILE = (cron) => `const nodeSchedule = require('../server/node_modules/node-schedule');
const CronQueue = require('../server/config/bull');

nodeSchedule.scheduleJob('${cron.cronExpression}', () => {
  CronQueue.add(${JSON.stringify(cron)});
});
`;

module.exports = FILE;
