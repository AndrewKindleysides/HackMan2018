var sms = require("./sms");
const timing = require("./timing");
const engine = require('./messageEngine');

const threshholdHumidity = 35;

function setHumidity(req, res, cache){
    
    var sensorHum = req.params.h;    
    res.setHeader('Content-Type', 'text/plain');
    
    timing.set(sensorHum, "latestHum", cache);
    
    if(sensorHum >= threshholdHumidity)
    {
        if(timing.canSendSms(cache))
        {
            var message = engine.getMessage("humidity", sensorHum); 
            sms.send(message);
            timing.update(cache);

            res.setHeader('Content-Type', 'text/plain');
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


exports.setHumidity = setHumidity;