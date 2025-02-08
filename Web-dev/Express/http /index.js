const express = require('express');

const app = express()

app.get("/add", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
   res.json({
    msg: a + b
   })
})

app.get("/divide", function (req,res){
    const a = req.query.a;
    const b = req.query.b;
    res.json({
     msg: a / b
    })
})

app.get("/multiply", function (req,res){
    const a = req.query.a;
    const b = req.query.b;
    res.json({
     msg: a * b
    })
})

app.get("/substract", function (req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
   res.json({
    msg: a - b
   })
})

app.listen(3000);