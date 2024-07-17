const express = require('express')
const cors = require('cors')
const ConnectDB = require('./db/db')
const User = require('./Models/user')
const app = express()

app.use(cors());
ConnectDB()

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the server!' });
})


app.post('/api/data', (req,res)=>{
    const receivedData = req.body;
    console.log(receivedData)
})
app.listen(3000,()=>{
    console.log("server is running")
})