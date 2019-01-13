const express = require('express');
const path = require('path');
var request = require('request');

const app = express();

const apiKey = 'BMSw4WMQoJpDhgZUB0lQ';/*process.env.REACT_APP_API_KEY;*/

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/public')));

// An api endpoint that returns a short list of items
app.get('/api/getBooks', (req, res) => {
    const searchText = req.query.searchText;
    let url = `https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${searchText}`;
    request.get({ url }, function (error, response, body) {
        res.json(body);
    });
});

app.get('/api/getBookDetails/:bookId', (req, res) => {
    const bookId = req.params.bookId;
    let url = `https://www.goodreads.com/book/show/${bookId}?key=${apiKey}`;;
    request.get({ url }, function (error, response, body) {
        res.json(body);
    });
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);