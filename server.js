const express = require('express');
const app = express();

// TODO: REMOVE THIS COMMENT //THIS IS A TEST
app.get('/', function(req,res){
    return res.send('test route');
})

app.get('/test', function(req,res){
    return res.send('another route');
})

app.get('/test1', function(req,res){
    return res.send('another route1');
})

app.listen(4000, function(){
    console.log('server running on port 4000');
})
