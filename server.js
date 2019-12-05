const mongoose = require('mongoose')
require('dotenv').config({path: './.env'})
const logger = require('morgan')
const app = require('express')()
const bodyParser = require('body-parser')
const router = require('./router')

//conectando ao banco de dados
const { DB_HOST, DB_PORT, DB_NAME, PORT } = process.env;
const mongoURL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

app.use(logger('dev'))
app.use(bodyParser.json())

app.use(router)

app.use((err) => {
    console.log(err)    
})

app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`)
})