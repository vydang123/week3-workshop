var express = require('express');
var app = express();
var http = require('http').Server(app);

const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/www'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/www/form.html");
});

app.post('/api/login', function (req, res) {
    let users = [
        { email: 'abc@gmail.com.au', pwd: '123' },
        { email: 'email2@example.com', pwd: '456' },
        { email: 'email3@example.com', pwd: '789' }
    ];
    if (!req.body) {
        return res.sendStatus(400);
    }
    var customer = {};
    customer.email = req.body.email;
    customer.upwd = req.body.upwd;
    customer.valid = false;
    for (let i = 0; i < users.length; i++) {
        if (req.body.email === users[i].email && req.body.upwd === users[i].pwd) {
            customer.valid = true;
            break;
        }
    }
    res.send(customer);
});

app.listen(3000, () => {
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log("Server has been started at: " + n + ":" + m);
});