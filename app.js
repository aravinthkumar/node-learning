const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('Entering middleware!!');
    res.send('<h1>You reached users end-point</h1>')
});

app.use('/', (req, res, next) => {
    console.log('Entering another middleware!!');
    res.send('<h1>Hello from Express.js</h1>')
});

console.log("Server is starting");
app.listen(3000);
console.log("Server is started and listening");
