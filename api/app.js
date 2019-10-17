const http = require('http');
const sessions = require('express-session');

const routes = require('./routes');

console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000);