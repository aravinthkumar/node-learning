const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/user', (req, res, next) => {
    console.log("/user is reached")
    res.sendFile(path.join(__dirname, 'views', 'user.html'))
})


app.use('/', (req, res, next) => {
    console.log("/ end-point is reached");
    res.sendFile(path.join(__dirname, 'views', 'welcome.html'));
})


console.log("Server is starting");
app.listen(3000);
console.log("Server is started and listening");
