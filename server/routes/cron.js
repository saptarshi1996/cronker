const router = require('express').Router();

const cronController = require('../controllers/cron');

router.get('/cronList', cronController.getCronList);
router.post('/createCron', cronController.createNewCron);
router.put('/updateCron/:id', cronController.updateCron);
router.delete('/deleteCron/:id', cronController.deleteCron);

module.exports = router;
