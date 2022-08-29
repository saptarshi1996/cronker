const Arena = require('bull-arena');
const Queue = require('bull');

const arena = Arena({
  Bull: Queue,
  queues: [
    {
      name: 'CronQueue',
      hostId: 'CronQueue',
      host: '127.0.0.1',
      port: 6379,
    },
  ],
}, {
  basePath: '/',
});

module.exports = arena;
