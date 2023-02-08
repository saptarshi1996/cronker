import { Server, ServerRegisterPluginObject } from '@hapi/hapi'
import Inert from '@hapi/inert'
import Vision from '@hapi/vision'
import HapiSwagger from 'hapi-swagger'

import environment from '../../config/environment'

import response from '../middlewares/response'

import routes from '../routes'

const {
	PORT,
	HOST,
} = environment

export default async function getServer(): Promise<Server> {

  const server = new Server({
    host: HOST,
    port: PORT,
    routes: {
      cors: true,
    },
  })

	const swaggerOptions: HapiSwagger.RegisterOptions = {
    info: {
      title: 'Cronker API Documentation',
      version: '0.0.1',
    },
    grouping: 'tags',
    basePath: '/api',
    documentationPath: '/api/documentation',
    jsonPath: '/api/swagger.json',
    swaggerUIPath: '/api/swagger/ui',
    schemes: ['http', 'https'],
  }

  const plugins: Array<ServerRegisterPluginObject<any>> = [
    {
      plugin: Inert,
    },
    {
      plugin: Vision,
    },
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]

  await server.register(plugins)
  await server.register(routes, {
    routes: {
      prefix: '/api',
    },
  })
  
  server.ext('onPreResponse', response)

  await server.initialize()
  return server
}
