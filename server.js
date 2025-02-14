const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello world!</h1>')
});

app.get('/about', (req, res) => {
    res.send('<h1>About page</h1><p>Its me!</p>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact rgrgwr page</h1><p>email: nailatalib@berkeley.edu</p>');
    console.log('hello');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});