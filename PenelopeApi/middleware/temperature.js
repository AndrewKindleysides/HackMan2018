const sms = require("./sms");
const timing = require("./timing");
const engine = require('./messageEngine');

const threshholdTemp = 35;

function setTemperature(req, res, cache){
    
    var message = engine.getMessage("temperature");
    if(req.params.t >= threshholdTemp)
    {
        if(timing.canSendSms(cache))
        {
            var message = engine.getMessage("temperature");
            sms.send(message);
            timing.update(cache);
        }
    }

    res.setHeader('Content-Type', 'text/plain');
    res.write(message);
    res.end(JSON.stringify(req.params.t, null, 2));   
}


exports.setTemperature = setTemperature;