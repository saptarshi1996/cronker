import Joi from 'joi'

export default {
  payload: Joi.object({
    name: Joi.string().required().label('Name'),
    method: Joi.string().required().label('Method'),
    url: Joi.string().required().label('Url'),
    payload: Joi.string().label('Payload'),
    headers: Joi.string().label('Headers'),
    cron_expression: Joi.string().required().label('Cron Expression'),
  }),
}
