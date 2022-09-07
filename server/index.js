const express = require('express');
const cors = require('cors');

const cronRouter = require('./routes/cron');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));
app.use(cors());

app.use('/cron', cronRouter);

// app.use('/arena', arena);

require('./helpers/file').createCrons();

const PORT = 8081;
const HOST = process.env.HOST || 'localhost';

app.listen(+PORT, HOST, () => console.log(`Server on PORT ${PORT} ${HOST}`));

require('./workers/cron');
require('./helpers/cron').requireAll();
