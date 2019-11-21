let express = require('express');
const bodyParser = require('body-parser');
const quotesObject = require('./modules/quotes');

const PORT = 5000;
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('client'));

app.get('/quotes', (req, res) => {
    console.log('GET Request for quotes.');
    res.send(quotesObject.getNext());
});

app.post('/quotes', (req, res) => {
    const newQuote = req.body;
    console.log('newQuote: ',newQuote)
    quotesObject.addQuote(newQuote);
    res.sendStatus(201)
});

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});