let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/static/login.html');
});


app.listen(6969);