const express = require('express')
const app = express()
var port = process.env.PORT || 9090
app.post('/ibm',function(req,res){
    res.send('<h2>WELCOME TO EXPRESS SERVER using POST </h2>')
})
app.get('/ibm',function(req,res){
    res.send('<h2>WELCOME TO EXPRESS SERVER using GET </h2>')
})
app.put('/ibm',function(req,res){
    res.send('<h2>WELCOME TO EXPRESS SERVER using PUT </h2>')
})
app.delete('/ibm',function(req,res){
    res.send('<h2>WELCOME TO EXPRESS SERVER using DELETE </h2>')
})
app.listen(port,function(){
    console.log('Express Server Started')
})