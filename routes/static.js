
const express = require('express')
const path = require('path')

const router = express.Router()

const root = path.join(__dirname, '..', 'public')

router.get('/', (request, response) => {
    response.sendFile('./homePage/index.html', { root })
})

module.exports = router