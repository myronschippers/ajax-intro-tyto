let express = require('express');
const quotes = require('./modules/quotes');

const PORT = 5000;
let app = express();

app.use(express.static('client'));

app.get('/quotes', (req, res) => {
    console.log('GET Request for quotes.');
    res.send(quotes.list);
});

app.listen(PORT, function(){
    console.log('listening on port', PORT);
});