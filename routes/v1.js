const express   = require('express')

const Router = express.Router()

Router.get('/karyawan', (req, res)=>{
    res.send([
        { nama : 'Andi', usia : 20},
        { nama : 'Budi', usia : 21},
        { nama : 'Caca', usia : 23},
        { nama : 'Dedi', usia : 25},
        { nama : 'Endo', usia : 28}        
    ])
})

module.exports = Router





