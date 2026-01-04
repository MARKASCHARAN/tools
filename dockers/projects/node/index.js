const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World, by NARENDRA!');
})

app.listen(3000);