const bodyParser = require('body-parser');
var sms = require("./sms");
const timing = require("./timing");

const threshholdHumidity = 35;

function setHumidity(req, res){
    
    console.log(req.params.h);
    //timing.update(new Date());

    if(req.params.h >= threshholdHumidity)
    {
        //if(timing.canSendSms())
        {
            sms.send("Something is getting hot and steamy? Didn't know your mum was visiting.");
            timing.update(new Date());
        }
    }

    res.setHeader('Content-Type', 'text/plain');
    res.write('you posted:\n');
    res.end(JSON.stringify(req.params.h, null, 2));   
}


exports.setHumidity = setHumidity;