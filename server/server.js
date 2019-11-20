let express = require('express');

const PORT = 5000;
let app = express();

app.use(express.static('client'))

app.listen(PORT, function(){
    console.log('listening on port', PORT);
});