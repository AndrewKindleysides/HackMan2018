var sms = require("./sms");
const timing = require("./timing");
const engine = require('./messageEngine');

const threshholdHumidity = 35;

function setHumidity(req, res, cache){
    
    var sensorHum = req.params.h;
    console.log(sensorHum);
    
    timing.set(sensorHum, "latestHum", cache);
    console.log('here');
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
    }

    res.setHeader('Content-Type', 'text/plain');
    res.end(JSON.stringify("Too many messages sent recently", null, 2));     
}


exports.setHumidity = setHumidity;