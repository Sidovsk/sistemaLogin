const mongoose = require('mongoose');
const { DB_HOST, DB_NAME, DB_PORT } = require('./constants');

//conectando ao banco de dados
module.exports = () => {
    const mongoURL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
    mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
}
