import 'dotenv/config'
import Fastify from 'fastify'

const fastify = Fastify({
  logger: true,
})

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

fastify.listen({ port: 8080 }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
