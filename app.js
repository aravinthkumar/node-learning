const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');
const users = [];

app.post('/user', (req, res, next) => {
    console.log("/user post is reached")
    users.push({ title: req.body.title });
    console.log(users);
    res.redirect('/');
})

app.get('/user', (req, res, next) => {
    console.log("/user get is reached")
    console.log(users);
    res.render('user', { pageTitle: 'Add User', path: '/user' });
})


app.use('/', (req, res, next) => {
    console.log("/ end-point is reached");
    res.render('welcome', { pageTitle: 'Welcome users', user: users, path: '/' });
})


console.log("Server is starting");
app.listen(3000);
console.log("Server is started and listening");
