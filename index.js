const express = require('express');
const path= require('path');

app= express();

app.get('/', function(req, res) {
    app.set('content-type', 'text/html');
    res.sendFile(path.join(__dirname,'index.html'));
})

app.use(bodyparser.urlencoded({extended:true}));
app.post('/', function(req, res){
    res.send(req.body.num1 +req.body.num2) 
})

app.listen(2000);