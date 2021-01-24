console.log("Hello world");
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('hello world!')
})

app.listen(port, ()=>{
    console.log(`hello world express app is running! at http://localhost:${port}`)
})