const Queue = require('bull');

const queue = 'CronQueue';

const CronQueue = new Queue(queue);

module.exports = CronQueue;
