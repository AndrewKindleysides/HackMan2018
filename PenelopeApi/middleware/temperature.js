const bodyParser = require('body-parser');
var sms = require("./sms");
const timing = require("./timing");

const threshholdTemp = 35;

function setTemperature(req, res){
    
    console.log(req.params.t);
    //timing.update(new Date());

    if(req.params.t >= threshholdTemp)
    {
        //if(timing.canSendSms())
        {
            sms.send("Have we moved back down to hell?");
            timing.update(new Date());
        }
    }

    res.setHeader('Content-Type', 'text/plain');
    res.write('you posted:\n');
    res.end(JSON.stringify(req.params.t, null, 2));   
}


exports.setTemperature = setTemperature;