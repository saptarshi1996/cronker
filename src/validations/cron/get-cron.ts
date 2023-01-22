import Joi from 'joi'

export default {
  params: Joi.object({
    cron_id: Joi.number().required().label('Id'),
  }),
}
