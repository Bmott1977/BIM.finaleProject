
//// node app

const express = require('express')

const apiRoutes = require('./routes/api-v1')

//const { request } = require('http')



const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.static('public'))
app.use('/api', apiRoutes)
app.use('/', require('./routes/static'))



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})