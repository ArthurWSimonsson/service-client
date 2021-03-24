const Client = require('../models/Client')

exports.findClientUUID = async(clientId) => {
    console.log('invoiceController.findClientUUID triggered')

    let client = await Client.findOne({clientNr: clientId})
    console.log('client', client)
    return client
}

exports.createClient = async (clientId) => {
    let client = {
        clientNr: clientId,
        clientUUID: generateUUID()
    }

    console.log('do you enter')

    let result = await Client(client).save()

    return result
}

function generateUUID() {  
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}