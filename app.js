const bodyParser = require('body-parser');
const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
    console.log("/ end-point is reached");
    res.status(404).send('<h1> Page not found </h1>');
})

console.log("Server is starting");
app.listen(3000);
console.log("Server is started and listening");
