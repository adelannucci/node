const express = require('express');
const app = express();

app.use('/users', (req, res, next) => {
    console.log('call users.');
    res.send('<h1>Welcome to users page.</h1>');
});

app.use('/', (req, res, next) => {
    console.log('call root.');
    res.send('<h1>Welcome to root page.</h1>');
});

app.listen(3000);