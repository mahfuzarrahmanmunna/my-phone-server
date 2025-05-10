const express = require('express');
const app = express()
const port = 5000;

app.get('/', (req, res) => {
    res.send("This is my second server.! and this is phone server !!!")
})

app.listen(port, () => {
    console.log(`My phone server is running on port ${port}`);
})