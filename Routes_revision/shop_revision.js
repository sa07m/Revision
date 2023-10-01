const express = require('express')
const router = express.Router()
 const path = require('path')
const rootDir = require('../util_revision/path_revision')

router.get('/shop', (req, res, next)=>{
    res.sendFile(path.join(rootDir,'views_revision', 'shop.html'))
})

module.exports = router