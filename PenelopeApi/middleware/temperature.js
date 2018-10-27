const bodyParser = require('body-parser');

 function setTemperature(req, res){
    console.log(req);    
    res.setHeader('Content-Type', 'text/plain');
    res.write('you posted:\n');
    res.end(JSON.stringify(req.params.p, null, 2));   
}

exports.setTemperature = setTemperature;