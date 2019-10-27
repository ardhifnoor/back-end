const bodyParser    = require('body-parser')
const cors          = require('cors')
const express       = require('express')

const config        = require('./config')
const v1            = require('./routes/v1')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/v1', v1)

app.use('*', (req, res)=>{
    res.status(404)
    res.send('Not Found')
})

app.listen(config.app.port, ()=>{
    console.log('App started using port :', config.app.port)
})