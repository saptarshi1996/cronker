import {
	Server,
	ServerRegisterPluginObject,
} from '@hapi/hapi'
import Inert from '@hapi/inert'
import Vision from '@hapi/vision'
import HapiSwagger from 'hapi-swagger'

import routeLogger from '../middlewares/route-logger'
import response from '../middlewares/response'

import routes from '../routes'

const server = new Server({
	host: 'localhost',
	port: 10019,
	routes: {
		cors: true,
	},
})

export default async function getServer(): Promise<Server> {
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

  server.ext('onRequest', routeLogger)
  server.ext('onPreResponse', response)

  await server.initialize()
  return server
}
