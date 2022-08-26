const fs = require('fs');
const pm2 = require('pm2');

const fileTemplate = require('../templates/cron-file');

exports.createCrons = () => {
  const dir = __dirname+'/../crons/'
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
}

exports.createFileForCron = (cron) => {

  const fileData = fileTemplate(cron);
  const filePath = __dirname+`/../crons/${cron.id}.js`;

  if (!fs.existsSync(filePath)) {
    fs.openSync(filePath, 'w');
  }

  fs.writeFileSync(filePath, fileData, 'utf-8', {
    flag: 'wx'
  });

}

exports.updateFileForCron = (cron) => {

  const fileData = fileTemplate(cron);
  const filePath = __dirname+`/../crons/${cron.id}.js`;

  console.log(filePath);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  fs.writeFileSync(filePath, fileData, 'utf-8', {
    flag: 'wx'
  });

  require('./cron').requireAll();
  setTimeout(() => pm2.restart('index'), 500);

}

exports.deleteFileForCron = async (id) => {
  const filePath = __dirname+`/../crons/${id}.js`;
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    setTimeout(() => pm2.restart('index'), 500);
  }
}
