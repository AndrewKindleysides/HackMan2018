var express = require('express');
var bodyParser = require('body-parser');
var temperature = require('./middleware/temperature');
var fan = require('./middleware/fan');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/temperature/:t', (req, res) => temperature.setTemperature(req,res));
app.get('/fan', (req, res) => fan.start(req, res));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

