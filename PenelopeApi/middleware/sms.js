
const phoneNumber = "447895146077";
const pieNumber = "447860033076";
var clockwork = require("clockwork")({key:"b1dacda2b2ff39cfa6c1bd6915d91d89adc9a1c3"});

function send(message){
    clockwork.sendSms({ To: phoneNumber, Content: message, From: "Penelope"}, function(error, resp) {        
        if (error) {
            console.log("Something went wrong", error);
        } else {
            if(resp.responses[0].success)
                console.log("Message sent",resp.responses[0].id);
            else 
            console.log("Something went wrong", resp.responses[0]);
        };
    });
}

function sendSmsToPie(message){
    clockwork.sendSms({ To: pieNumber, Content: message, From: "Penelope"}, function(error, resp) {        
        if (error) {
            console.log("Something went wrong", error);
        } else {
            if(resp.responses[0].success)
                console.log("Message sent",resp.responses[0].id);
            else 
            console.log("Something went wrong", resp.responses[0]);
        };
    });
}

exports.send = send;
exports.sendSmsToPie = sendSmsToPie;