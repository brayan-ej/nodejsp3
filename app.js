const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("Welcome to Brayan's test home page!!");
});
app.listen(3000, () => {
    console.log("Whatsapp");
});