const {graphiqlFastify, graphqlFastify} = require('fastify-graphql');
const fastify = require('fastify')({
	logger: true
})

fastify.register(require('./routes/clientRoutes'))


const mongoose = require('mongoose')

mongoose
	.connect('mongodb+srv://dbuser:9imewgrsoR2ZqdyQ@cluster0.suofv.mongodb.net/client?retryWrites=true&w=majority')
	.then(() => console.log('MongoDB connected...'))
	.catch(err => console.log(err))

module.exports = fastify
