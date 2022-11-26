const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminData.routes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
    console.log("/ end-point is reached");
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

console.log("Server is starting");
app.listen(3000);
console.log("Server is started and listening");
