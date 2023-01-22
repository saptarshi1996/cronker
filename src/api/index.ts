import { Request, ResponseToolkit, Server, ServerRegisterPluginObject } from '@hapi/hapi'
import Inert from '@hapi/inert'
import Vision from '@hapi/vision'
import HapiSwagger from 'hapi-swagger'

import routes from './routes'

const server = new Server({
  host: 'localhost',
  port: 10019,
  routes: {
    cors: true,
  },
})

export async function Application() {

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

  server.ext('onRequest', (req: Request, h: ResponseToolkit): symbol => {
    console.log(new Date().toISOString().slice(0, 19).replace('T', ' '), `${req.method.toUpperCase()} | ${req.url}`)
    return h.continue
  })


  server.ext('onPreResponse', (req: Request, h: ResponseToolkit) => {
    if (req.url.pathname.includes('documentation') || req.url.pathname.includes('swagger')) {
      return h.continue
    } else {
      const result: any = req.response
      if (result.source) {
        return h.response({
          ...result.source,
        }).code(200)
      } else if (result.output) {

        if (result.statusCode && result.statusCode === 500) {
          console.log(result.stack)
        }

        return h.response({
          message: result.message,
        }).code(result.statusCode || 500)
      } else {
        return h.continue
      }
    }
  })

  console.log(`Server on port 10019`)
  await server.start()

}

Application()
