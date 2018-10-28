const sms = require("./sms");
const timing = require("./timing");
const engine = require('./messageEngine');

const threshholdTemp = 35;

function setTemperature(req, res, cache){
    
    var sensorTemp = req.params.t;
    
    timing.set(sensorTemp, "latestTemp", cache);

    if(sensorTemp >= threshholdTemp)
    {
        if(timing.canSendSms(cache))
        {
            var message = engine.getMessage("temperature", sensorTemp); 
            sms.send(message);
            timing.update(cache);

            res.setHeader('Content-Type', 'text/plain');
            res.write(message);  
            res.end(); 
            return;
        }
    }

    res.setHeader('Content-Type', 'text/plain');
    res.end(JSON.stringify("Too many messages sent recently", null, 2));       
}

exports.setTemperature = setTemperature;