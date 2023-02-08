import routeLogger from './middlewares/route-logger'
import Server from './setup/application'

Server().then(async (server) => {
  console.log('server on port 10019 at localhost')
  server.ext('onRequest', routeLogger)
  await server.start()
}).catch(ex => console.log(ex))
