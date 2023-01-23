import {
  Plugin,
  Server,
} from '@hapi/hapi'

import {
  getCron,
  listCron,
  deleteCron,
  updateCron,
  createCron,
} from '../../controllers/cron'

import createCronValidation from '../../validations/cron/create-cron'
import getCronValidation from '../../validations/cron/get-cron'
import updateCronValidation from '../../validations/cron/update-cron'

const tags = ['api', 'Cron']

export default {
  name: 'Cron',
  register: (server: Server) => {
    server.route([
      {
        method: 'POST',
        path: '/cron',
        options: {
          auth: false,
          description: 'Create Cron',
          tags,
          handler: createCron,
          validate: createCronValidation,
        }
      },
      {
        method: 'GET',
        path: '/cron',
        options: {
          auth: false,
          description: 'Get Cron List',
          tags,
          handler: listCron,
        }
      },
      {
        method: 'GET',
        path: '/cron/{cron_id}',
        options: {
          auth: false,
          description: 'Get Cron',
          tags,
          handler: getCron,
          validate: getCronValidation,
        }
      },
      {
        method: 'DELETE',
        path: '/cron/{cron_id}',
        options: {
          auth: false,
          description: 'Delete Cron',
          tags,
          handler: deleteCron,
          validate: getCronValidation,
        }
      },
      {
        method: 'PUT',
        path: '/cron/{cron_id}',
        options: {
          auth: false,
          description: 'Update Cron',
          tags,
          handler: updateCron,
          validate: updateCronValidation,
        }
      },
    ])
  }
} as Plugin<unknown>
