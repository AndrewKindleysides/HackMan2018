const sms = require("./sms");
const timing = require("./timing");
const engine = require('./messageEngine');

const threshholdTemp = 23;

function setTemperature(req, res, cache){
    
    var sensorTemp = req.params.t;
    
    timing.set(sensorTemp, "latestTemp", cache);
    res.setHeader('Content-Type', 'text/plain');

    if(sensorTemp >= threshholdTemp)
    {
        if(timing.canSendSms(cache))
        {
            var message = engine.getMessage("temperature", sensorTemp); 
            sms.send(message);
            timing.update(cache);

            
            res.write(message);  
            res.end(); 
            return;
        }
        else{
            
            res.end(JSON.stringify("Too many messages sent recently", null, 2)); 
            return;
        }
    }

    res.end(JSON.stringify("Parameters are normal", null, 2));       
}

exports.setTemperature = setTemperature;