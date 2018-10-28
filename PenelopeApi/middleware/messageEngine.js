const random = require('random-number-between');
const temperatureMessages = [ "Have we moved to hell again?", 
                        "Hey, do you know what would be great? NOT burning Alive!", 
                            "I'm not a F****ing cactus!",
                        "Are you too poor or too cheap to install Air-Con?" ];

function getMessage(topic){
    if(topic == 'temperature')
    {
        var msgIndex = random(0, temperatureMessages.length -1, 1);
        return temperatureMessages[msgIndex];
    }
}

exports.getMessage = getMessage;