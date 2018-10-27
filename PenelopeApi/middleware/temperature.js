const bodyParser = require('body-parser');
var sms = require("./sms")

const phoneNumber = "447780542460";
const threshholdTemp = 35;

function setTemperature(req, res){
    
    console.log(req.params.t);
    if(req.params.t >= threshholdTemp )
    {
        sms.send("Have we moved back down to hell?");
    }

    res.setHeader('Content-Type', 'text/plain');
    res.write('you posted:\n');
    res.end(JSON.stringify(req.params.t, null, 2));   
}

exports.setTemperature = setTemperature;