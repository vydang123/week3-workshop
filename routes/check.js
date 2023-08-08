const fs = require("fs");

module.exports = {
    rounteFunc: (app) =>
    app.post('/check', function(req, res){
        c = {
            "email": req.body.username,
            "password": req.body.psw
        }
        obj = [{
            "email": "vydang@gmail.com",
            "upwd":"0103"
        },
        {
            "email": "tranle@gmail.com",
            "upwd":"2311"
        },
        {
            "email": "euler@gmail.com",
            "upwd":"0000"
        }]
        fs.readFile("./data/data.json", 'utf8', function(req, res){
            if (err) throw err;
            console.log(c)
        }

        )
    })
}