const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')

const router = express.Router()

const { url } = process.env.MONGODB_URL || require('../secret/mongodb.json')
const client = new MongoClient(url)

const getCollection = async (dbName, collectionName) => {
	await client.connect()
	return client.db(dbName).collection(collectionName)
}

// GET /api/menu id, name, description

router.get('/menu', async (request, response) => {
	const collection = await getCollection('foodTruck-api', 'menu')
	console.log(collection)
	const menu = await collection.find().toArray()
	response.json(menu)
})

// POST /api/menu name, description, price

router.post('/menu', async (request, response) => {
	const{ body } = request
	const { name, description, price } = body
	const menu = { name, description, price }

	const collection = await getCollection('foodTruck-api', 'menu')
	const result = await collection.insertOne(menu)
	response.json(result)
})


// PUT /api/menu/:id name, description, price

router.put('/menu/:id', async (request, response) => {
	const{ body, params } = request
	const { id } = params
	const { name, description, price } = body
	const menu = { name, description, price }

	const collection = await getCollection('foodTruck-api', 'menu')
	const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: menu })
	response.json(result)
})

// DELETE /api/menu/:id

router.delete('/menu/:id', async (request, response) => {
	const { id } = request.params
	const collection = await getCollection('foodTruck-api', 'menu')
	const result = await collection.deleteOne({ _id: new ObjectId(id) })
	response.json(result)
})

// GET /api/events id, name

router.get('/events', async (request, response) => {
	const collection = await getCollection('foodTruck-api', 'events')
	const events = await collection.find().toArray()
	response.json(events)
})

// GET /api/events/:id name, location, dates, hours

router.get('/events/:id', async (request, response) => {
	const { id, location, dates, hours } = request.params
	const collection = await getCollection('foodTruck-api', 'events')
	const event = await collection.findOne({ _id: new ObjectId(id) })
	response.json(event)
})


// POST /api/events name, location, dates, hours

router.post('/events', async (request, response) => {
	const{ body } = request
	const { name, location, dates, hours } = body
	const event = { name, location, dates, hours }

	const collection = await getCollection('foodTruck-api', 'events')
	const result = await collection.insertOne(event)
	response.json(result)
})

// PUT /api/events/:id name, location, dates, hours

router.put('/events/:id', async (request, response) => {
	const{ body, params } = request
	const { id } = params
	const { name, location, dates, hours } = body
	const event = { name, location, dates, hours }

	const collection = await getCollection('foodTruck-api', 'events')
	const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: event })
	response.json(result)
})

// DELETE /api/events/:id

router.delete('/events/:id', async (request, response) => {
	const { id } = request.params
	const collection = await getCollection('foodTruck-api', 'events')
	const result = await collection.deleteOne({ _id: new ObjectId(id) })
	response.json(result)
})

module.exports = router