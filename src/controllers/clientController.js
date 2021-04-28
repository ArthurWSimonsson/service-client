const Client = require('../models/Client')

// Finds a client object (including UUID) through the client number.
exports.findClientUUID = async(clientId) => {
    console.log('invoiceController.findClientUUID triggered')

    let client = await Client.findOne({clientNr: clientId})
    console.log('client', client)
    return client
}

// Creates a client.
exports.createClient = async (clientId) => {
    let client = {
        clientNr: clientId,
        clientUUID: generateUUID()
    }

    console.log('do you enter')

    let result = await Client(client).save()

    return result
}

// Generates a random UUID
function generateUUID() {  
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}