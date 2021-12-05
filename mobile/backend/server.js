require('dotenv').config();
const server = require('express')();
const Router = require('./router');

server.use(Router);

server.listen(process.env.PORT, () => {
    console.log('Mobile server is runinng');
});