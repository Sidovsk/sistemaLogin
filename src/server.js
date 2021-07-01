
const logger = require('morgan');
const express = require('express');
const userRouter = require('./routers/user');
const loginRouter = require('./routers/login');
const cors = require('cors');

const server = express();

server.use(logger('dev'));
server.use(cors());
server.use(express.json({
    limit: '20mb'
}));

server.use('/users', userRouter);
server.use('/login', loginRouter);

server.use((err, req, res, next) => {
    //TODO: more robust error handler
    console.log(err);
    err.statusCode ? 
        res.status(err.statusCode).json({error: err.message}) :
        res.status(500).json({error: "erro interno na API"});
});

module.exports = server;