
import express from "express"; 

console.log("console log checking let's start!"); 

const app = express(); 


const handleListeing= () => {
    console.log("server Listening 4000"); 
};

app.listen(4000, handleListeing);










// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)