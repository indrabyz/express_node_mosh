const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

//tes
const port = process.env.PORT || 30;
app.listen(port, () => console.log('Listening on port ${port}...'));