let express = require('express');
const quotesObject = require('./modules/quotes');

const PORT = 5000;
let app = express();

app.use(express.static('client'));

app.get('/quotes', (req, res) => {
    console.log('GET Request for quotes.');
    res.send(quotesObject.getNext());
});

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});