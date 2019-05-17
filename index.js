require('dotenv').config();

const server = require('./api/server');

const port = process.env.PORT || 5410;
server.listen(port, () => {
    console.log(`*** Server listening to port ${port} ***`)
});