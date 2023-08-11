var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/www'));
app.listen(3000,()=>{
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log("Server has been started at: "+ n + " : " + m);
});
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/www/form.html');
    });

app.post('/api/login',function(req,res){
    let users =[{'email':'abc@gmail.com','pwd':'123'}]
    if (!req.body){
        return res.sendStatus(400)
    }
    var customer = {};
    customer.email = req.body.email;
    customer.upwd = req.body.upwd;
    customer.valid = false;
    for(let i=0;i<users.length;i++){
        if(req.body.email == users[i].email && req.body.upwd == users[i].pwd){
            customer.valid = true;
            }
       }
       console.log({ valid: customer.valid });
       res.json({ valid: customer.valid });

});