var express = require('express');
var bodyParser = require('body-parser');
var temperature = require('./middleware/temperature');

const port = 3000;
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/temperature/:t', (req, res) => temperature.setTemperature(req,res));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

