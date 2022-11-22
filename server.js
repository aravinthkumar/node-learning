const http = require('http');
const router = require('./router');

const server = http.createServer(router);
console.log("Server is starting");
server.listen(3000);
console.log("Server is started and listening");
