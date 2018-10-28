const sms = require("./sms");
const timing = require("./timing");
const engine = require('./messageEngine');


function trigger(req, res, cache){
    
    var sensor = req.params.m;
    console.log(sensor);
    
    timing.set(new Date(), "latestMovement", cache);
    res.setHeader('Content-Type', 'text/plain');

    if(sensor == true)
    {
        if(timing.canSendSms(cache))
        {
            var message = engine.getMessage("movement", sensor); 
            sms.send(message);
            timing.update(cache);
            
            res.write(message);  
            res.end(); 
            return;;
        }
        else{            
            res.end(JSON.stringify("Too many messages sent recently", null, 2)); 
            return;
        }
    }

    res.end(JSON.stringify("Parameters are normal", null, 2));       
}

exports.trigger = trigger;