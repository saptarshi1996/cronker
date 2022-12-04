import { Router } from 'express'

import * as cronController from '../controllers/cron'

const router = Router()

router.get('/cron', cronController.listCron)
router.post('/cron', cronController.createCron)

router.get('/cron/:id', cronController.getCron)
router.put('/cron/:id', cronController.updateCron)
router.delete('/cron/:id', cronController.deleteCron)

export default router
