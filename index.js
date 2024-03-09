require('dotenv').config()
const express = require("express");

const app = express();

app.get('/', (req, res)=>{
    res.send("Hello Vishal");
}) 

app.listen(process.env.PORT,()=>console.log(`its Working on ${process.env.PORT}`));