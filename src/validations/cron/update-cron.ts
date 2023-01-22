import Joi from 'joi'

export default {
  payload: Joi.object({
    name: Joi.string().label('Name'),
    method: Joi.string().label('Method'),
    url: Joi.string().label('Url'),
    payload: Joi.string().label('Payload'),
    headers: Joi.string().label('Headers'),
    cron_expression: Joi.string().label('Cron Expression'),
  }),
  params: Joi.object({
    cron_id: Joi.number().required().label('Id'),
  }),
}
