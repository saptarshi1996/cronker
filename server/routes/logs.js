const router = require('express').Router();

const logsController = require('../controllers/logs');

router.get('/logs/:id', logsController);

module.exports = router;
