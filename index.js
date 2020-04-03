const express = require('express');
const app = express();

app.listen(4000, () => {
    console.log('API RESt corriendo en el localhost:4000')
});

app.get('/', function (req, res) {
    res.send('Hola Mundo');
});

app.post('/', function (req, res) {
    res.send('Metodo Post');
});

app.put('/', function (req, res) {
    res.send('Metodo Put');
});

app.delete('/', function (req, res) {
    res.send('Metodo Detete');
});