const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
    console.log("/ end-point is reached");
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

console.log("Server is starting");
app.listen(3000);
console.log("Server is started and listening");
