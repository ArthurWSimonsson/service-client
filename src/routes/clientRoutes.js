const clientController = require('../controllers/clientController')

// Route handling requests towards the client service
const routes = async (app, options) => {
    app.get('/api/client/:id', async (request, reply) => {
        try {
            let id = request.params.id
            if(id == 2)
                throw "error when id is 2";
            let client = await clientController.findClientUUID(id)

            if(!client) {
                client = await clientController.createClient(id)
            }

            reply.send({
                status: 200,
                msg: "client found",
                client: client
            })
        }
        catch(err) {
            reply.code(400).send({
                status: 400,
                msg: 'Client error',
                error: err,
                message: err.message
            })
        }
    })

    app.delete('/api/client/', async(request, reply) => {
        try {
            await clientController.deleteClient(request.body.clientNr);
            reply.send({
                status: 200,
                msg: "client deleted"
            })
        }
        catch(err) {
            reply.code(400).send({
                status: 400,
                msg: 'Client error',
                error: err
            })
        }
    })
}

module.exports = routes