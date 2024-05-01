const router = require('express').Router()
const { MongoClient, ObjectId } = require('mongodb')

const url = process.env.MONGODB_URI || require('../secret/mongodb.json').url
const client = new MongoClient(url)

const getCollection = async (dbName, collectionName) => {
	await client.connect()
	return client.db(dbName).collection(collectionName)
}

// GET /api/menu id, name, description

router.get('/api/menu', async (request, response) => {
	const collection = await getCollection('foodTruck-api', 'menu')
	const menu = await collection.find().toArray()
	response.send(menu)
})

// POST /api/menu name, description, price

router.post('/api/menu', async (request, response) => {
	const{ body } = request
	const { name, description, price } = body
	const menu = { name, description, price }

	const collection = await getCollection('foodTruck-api', 'menu')
	const result = await collection.insertOne(menu)
	response.send(result)
})


// PUT /api/menu/:id name, description, price

router.put('/api/menu/:id', async (request, response) => {
	const{ body, params } = request
	const { id } = params
	const { name, description, price } = body
	const menu = { name, description, price }

	const collection = await getCollection('foodTruck-api', 'menu')
	const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: menu })
	response.send(result)
})

// DELETE /api/menu/:id

router.delete('/api/menu/:id', async (request, response) => {
	const { id } = request.params
	const collection = await getCollection('foodTruck-api', 'menu')
	const result = await collection.deleteOne({ _id: new ObjectId(id) })
	response.send(result)
})

// GET /api/events id, name

router.get('/api/events', async (request, response) => {
	const collection = await getCollection('foodTruck-api', 'events')
	const events = await collection.find().toArray()
	response.send(events)
})

// GET /api/events/:id name, location, dates, hours

router.get('/api/events/:id', async (request, response) => {
	const { id, location, dates, hours } = request.params
	const collection = await getCollection('foodTruck-api', 'events')
	const event = await collection.findOne({ _id: new ObjectId(id) })
	response.send(event)
})


// POST /api/events name, location, dates, hours

router.post('/api/events', async (request, response) => {
	const{ body } = request
	const { name, location, dates, hours } = body
	const event = { name, location, dates, hours }

	const collection = await getCollection('foodTruck-api', 'events')
	const result = await collection.insertOne(event)
	response.send(result)
})

// PUT /api/events/:id name, location, dates, hours

router.put('/api/events/:id', async (request, response) => {
	const{ body, params } = request
	const { id } = params
	const { name, location, dates, hours } = body
	const event = { name, location, dates, hours }

	const collection = await getCollection('foodTruck-api', 'events')
	const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: event })
	response.send(result)
})

// DELETE /api/events/:id

router.delete('/api/events/:id', async (request, response) => {
	const { id } = request.params
	const collection = await getCollection('foodTruck-api', 'events')
	const result = await collection.deleteOne({ _id: new ObjectId(id) })
	response.send(result)
})

module.exports = router