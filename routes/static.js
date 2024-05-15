
const express = require('express')
const path = require('path')

const router = express.Router()

const root = path.join(__dirname, '..', 'public', 'homePage')

router.get('/', (request, response) => {
    response.sendFile('index.html', { root })
})

module.exports = router