const sms = require("./sms");
const timing = require("./timing");

function start(req,res, cache){

    console.log('started fan');
    
    //if(timing.canSendSms(cache))
        //{
            var message = "FAN";
            sms.sendSmsToPie(message);
            //timing.update(cache);

            res.write("Triggered fan");  
            res.end(); 
            return;
        //}
        // else{            
        //     res.end(JSON.stringify("Too many messages sent recently", null, 2)); 
        //     return;
        // }    
}

exports.start = start;
