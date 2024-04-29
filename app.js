
//// node app

const express = require('express')

const apiRoutes = require('./api-routes')

const { request } = require('http')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.static('public'))
//uncomment when non-static endpoints are added
app.use('/api/v1', require('./routes/api-v1'))
app.use('/', require('./routes/static'))


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})