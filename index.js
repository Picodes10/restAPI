const express = require('express')
const app = express()
const mongoose = require('mongoose');

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});

app.get('/', (req, res) => {
    res.send("Hello, world from Node API!")
});

mangose.connect('mongodb+srv://Naira:mtBBHJ53UN0D0CvV@api.c63vp.mongodb.net/Node-api?retryWrites=true&w=majority&appName=API')
.then(() => {
    console.log('MongoDB Connected...');
})
.catch(err => console.log(err));