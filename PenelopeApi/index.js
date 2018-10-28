var express = require('express');
var bodyParser = require('body-parser');
var temperature = require('./middleware/temperature');
var humidity = require('./middleware/humidity');
var fan = require('./middleware/fan');
var latest = require('./middleware/latest');
var random = require('./middleware/random');
const NodeCache = require( "node-cache" );
const cache = new NodeCache();

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    //intercepts OPTIONS method
    if ('OPTIONS' === req.method) {
      //respond with 200
      res.send(200);
    }
    else {
    //move on
      next();
    }
});

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/temperature/:t', (req, res) => temperature.setTemperature(req,res, cache));
app.get('/humidity/:h', (req, res) => humidity.setHumidity(req,res, cache));
app.get('/fan', (req, res) => fan.start(req, res));
app.get('/latest/:p', (req, res) => latest.get(req, res, cache));
app.get('/random', (req, res) => random.get(req, res, cache));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

