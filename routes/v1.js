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

Router.get('/karyawan/:id', (req, res)=>{
    res.send(
        { nama : 'Andi', usia : 20}
    )
})

Router.get('/user', (req, res)=>{
    res.send([
        { username : 'Andi', password : 'adminpass'},
        { username : 'Budi', password : 'adminpass'},
        { username : 'Caca', password : 'adminpass'},
        { username : 'Dedi', password : 'adminpass'},
        { username : 'Endo', password : 'adminpass'}        
    ])
})

Router.get('/user/:id', (req, res)=>{
    res.send(
        { username : 'Andi', password : 'adminpass'}
    )
})

module.exports = Router





