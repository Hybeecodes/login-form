var express = require("express");
var bodyParser = require("body-parser");
var http = require("http");
var https = require("https");
var app = express();
var path = require("path");

app.use('/',express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({
  extended: true
}));

// app.get('/', function(req,res){
//     res.sendFile(__dirname,"/index");
// });

app.post("/login",function(req,res){
    console.log("username: ", req.body.username);
    console.log("password: ", req.body.password);

    if(req.body.username == "megastar" && req.body.password == "123456"){
        console.log(" Login Successful ");
    }else{
            console.log(" Invalid Login Details ");
    }
});

http.createServer(app).listen(3030);
console.log("server running on port 3030");

