require('dotenv').config();

const fs = require('fs');
const pm2 = require('pm2');

const fileTemplate = require('../templates/cron-file');

const { ENV } = process.env;

const dir = ENV === 'DOCKER' ? `/var/lib/cronker/crons` : __dirname+`/../../crons`;
const filePath = (cron) =>  ENV === 'DOCKER' ? `/var/lib/cronker/crons/${cron.id}.js` : __dirname+`/../../crons/${cron.id}.js`;

exports.createCrons = () => {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
}

exports.createFileForCron = (cron) => {
  const fileData = fileTemplate(cron);
  if (!fs.existsSync(filePath))
    fs.openSync(filePath, 'w');

  fs.writeFileSync(filePath, fileData, 'utf-8', {
    flag: 'wx'
  });
}

exports.updateFileForCron = (cron) => {
  const fileData = fileTemplate(cron);
  if (fs.existsSync(filePath))
    fs.unlinkSync(filePath);

  fs.writeFileSync(filePath, fileData, 'utf-8', {
    flag: 'wx'
  });

  require('./cron').requireAll();
  setTimeout(() => pm2.restart('index'), 500);
}

exports.deleteFileForCron = async (id) => {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    setTimeout(() => pm2.restart('index'), 500);
  }
}
