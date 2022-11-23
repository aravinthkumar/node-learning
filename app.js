const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
    console.log("/ end-point is reached");
    res.send('<h1> Hello you are in the root </h1>')
})

console.log("Server is starting");
app.listen(3000);
console.log("Server is started and listening");
