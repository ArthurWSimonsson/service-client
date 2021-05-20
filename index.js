const fastify = require('./src/server.js')

const start = async () => {
    try {
        await fastify.listen(3003, '0.0.0.0')
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } 
    catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()