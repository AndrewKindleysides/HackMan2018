const bodyParser = require('body-parser');
var sms = require("./sms");
const timing = require("./timing");

const threshholdTemp = 35;

function setTemperature(req, res, cache){
    
    if(req.params.t >= threshholdTemp)
    {
        if(timing.canSendSms(cache))
        {
            sms.send("My test?");
            timing.update(cache);
        }
    }

    res.setHeader('Content-Type', 'text/plain');
    res.write('you posted:\n');
    res.end(JSON.stringify(req.params.t, null, 2));   
}


exports.setTemperature = setTemperature;