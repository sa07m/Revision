const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../util_revision/path_revision')

router.get('/add-product', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views_revision', 'add-product.html'))
})

router.post('/add-product', (req, res, next)=>{
    res.redirect('/')
})

module.exports = router