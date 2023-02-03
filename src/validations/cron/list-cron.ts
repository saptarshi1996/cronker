import Joi from 'joi'

export default {
  query: Joi.object({
    limit: Joi.number().label('Limit'),
    offset: Joi.number().label('Offset'),
  }),
}
