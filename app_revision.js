const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const shopRoute = require('./Routes_revision/shop_revision')
const adminRoute = require('./Routes_revision/admin_revision')
//const rootDir = require('util_revision/path_revision')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))

app.use(adminRoute)
app.use(shopRoute)

app.get('/',(req, res, next)=>{
    res.send('<h3>Welcome to home page</h3>')
})

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname,'views_revision', '404.html'))
})

app.listen(4000)