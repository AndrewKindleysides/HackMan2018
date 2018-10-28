
const phoneNumber = "447780542460";
var clockwork = require("clockwork")({key:"b1dacda2b2ff39cfa6c1bd6915d91d89adc9a1c3"});

function send(message){
    clockwork.sendSms({ To: phoneNumber, Content: message, From: "Penelope"}, function(error, resp) {
        if (error) {
            console.log("Something went wrong", error);
        } else {
            console.log("Message sent",resp.responses[0].id);
        }
    });
}

exports.send = send;