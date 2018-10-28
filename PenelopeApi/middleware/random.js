const engine = require('./messageEngine');
const sms = require("./sms");
const timing = require("./timing");

function get(req,res, cache){
    
    try{
        if(timing.canSendSms(cache))
        {
            let message = engine.getMessage("random", 0); 
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
    }catch(err)
    {
        console.log(err);
        res.end(); 
    }    
}

exports.get = get;
