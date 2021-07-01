const server = require('./server');
const { PORT } = require('./utils/constants');
require('./utils/db-connection')();

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});