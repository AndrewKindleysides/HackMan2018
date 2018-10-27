const bodyParser = require('body-parser');

function setTemperature(req, res){
    console.log(req.body);    
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
}