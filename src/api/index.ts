import Server from './setup/application'

Server().then(async (server) => {
  console.log('server on port 10019 at localhost')
  await server.start()
}).catch(ex => console.log(ex))
