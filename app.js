const bodyParser    = require('body-parser')
const cors          = require('cors')
const express       = require('express')

const app = express()

app.use(cors)
app.use(bodyParser.json())

app.use('*', (req, res)=>{
    res.status(404)
    res.send('Not Found')
})

app.listen(3000, ()=>{
    console.log('App started using port :', 3000)
})