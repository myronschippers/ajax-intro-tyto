let express = require('express');
let app = express();

// Homepage Route
app.get('/', (req, res) => {
    res.send('Welcome to the homepage!!!');
})

app.listen(5000, function(){
    console.log('listening on port', 5000);
});