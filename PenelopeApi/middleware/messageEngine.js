const random = require('random-number-between');
const temperatureMessages = [ "Have we moved to hell again?", 
                            "Hey, do you know what would be great? NOT burning Alive!", 
                            "I'm not a F****ing cactus!",
                            "Are you too poor or too cheap to install Air-Con?" ];

const humidityMessages = [ "Something around here is getting hot and steamy ... Didn't know your mum is visiting.", 
                            "Hey, it's like a tropical forest! Too bad I'm NOT a tropical plant!", 
                            "I'm not a F****ing cactus!",
                            "Are you too poor or too cheap to install Air-Con?" ];

                            
const keirUrl = "https://bit.ly/2z6a5Da";//"https://green-coders.herokuapp.com/";

function getMessage(topic, sensorValue){
    if(topic == 'temperature')
    {
        let msgIndex = random(0, temperatureMessages.length -1, 1);        
        let msg = temperatureMessages[msgIndex] + "(" + sensorValue + "C) " + keirUrl;
        return msg;
    }

    if(topic == 'humidity')
    {
        let msgIndex = random(0, humidityMessages.length -1, 1);        
        let msg = humidityMessages[msgIndex] + "(" + sensorValue + "C) " + keirUrl;
        return msg;
    }
}

exports.getMessage = getMessage;