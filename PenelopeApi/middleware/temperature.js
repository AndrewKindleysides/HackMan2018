const bodyParser = require('body-parser');
var clockwork = require("clockwork")({key:"b1dacda2b2ff39cfa6c1bd6915d91d89adc9a1c3"});

const phoneNumber = "447780542460";
const threshholdTemp = 35;

function sendSms(message){
    clockwork.sendSms({ To: phoneNumber, Content: message}, function(error, resp) {
        if (error) {
            console.log("Something went wrong", error);
        } else {
            console.log("Message sent",resp.responses[0].id);
        }
    });
}

function setTemperature(req, res){
    
    if(req.params.t >= threshholdTemp )

    res.setHeader('Content-Type', 'text/plain');
    res.write('you posted:\n');
    res.end(JSON.stringify(req.params.p, null, 2));   
}

exports.setTemperature = setTemperature;