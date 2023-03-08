const express = require('express');
const app = express();
const PORT = 8000;
const path = require('path');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/UniversalCentury', (req, res) => {
    res.sendFile(__dirname + ('/Universal Century.html'));
})

app.listen(PORT, () => {
    console.log('The server is now running on port ${PORT}. Its soul is no longer bound by gravity.')
})