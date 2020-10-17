const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3001
app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname + '/index.html'))
});
app.get("/js/script.js", (req, res) => {
    res.sendFile(path.join(__dirname + '/js/script.js'))
});
app.get("/css/style.css", (req, res) => {
    res.sendFile(path.join(__dirname + '/css/style.css'))
});
app.listen(port, () => {
    console.log("Express server listening on port " + port);
})