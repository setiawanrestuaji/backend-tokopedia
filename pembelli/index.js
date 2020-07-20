const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const { port } = require('./src/config/env')
const routes = require('./src/routes')

const app = express()

app.use(cors())
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', routes)

app.listen(port, 
    ()=>{
        console.log(`Server running on PORT ${port}`)
    }
)