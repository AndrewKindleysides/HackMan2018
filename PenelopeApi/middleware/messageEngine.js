const random = require('random-number-between');
const temperatureMessages = [ "Have we moved to hell again?", 
                            "Hey, do you know what would be great? NOT burning Alive!", 
                            "I'm not a F****ing cactus!",
                            "Are you too poor or too cheap to install Air-Con?" ];

const humidityMessages = [ "Something around here is getting hot and steamy ... Didn't know your mum is visiting.", 
                            "Hey, it's like a tropical forest! Too bad I'm NOT a tropical plant!", 
                            "I'm not a F****ing cactus!",
                            "Are you too poor or too cheap to install Air-Con?" ];
                            
const randomMessages = [ "I think we’re at the point in our relationship where we should start seeing other people… Love, your pot plant", 
                            "Help! An evil witch turned me into a plant!", 
                            "Your cat pissed on me ... I'm not impressed ...",
                            "You're not supposed to keep plants in the bedroom ... We get traumatised by what goes on in there...",
                            "If I had eye balls I could be watching you all the time ... A silent witness to your every day life... Always watching ...",
                            "Heard a man on Mars grew potatoes out of his own poop ... Don't get any ideas! I'm a strictly shop bought compost type of plant!",
                            "Have you got any more of that compost? Because .. I'm F###ing dying!",
                        "You only adopted a plant because it can't get away from you!" ];
const movementMessages = [ "Your house is being burgled! ... Or it's windy ...", 
                            "Hello? ... Is it me you're looking for? ...", 
                            "I'm being attacked by a Zombie! Plant more sunflowers!",
                            "You're not supposed to keep plants in the bedroom ... We get traumatised by what goes on in here...",
                            "HELP! I'm being attacked by a ZOMBIE! ... Plant more damn sunflowers!",
                            ];
                            
const keirUrl = "https://green-coders.herokuapp.com/";//"https://bit.ly/2z6a5Da";//

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
        let msg = humidityMessages[msgIndex] + "(" + sensorValue + "%) " + keirUrl;
        return msg;
    }

    if(topic == 'random')
    {
        let msgIndex = random(0, randomMessages.length -1, 1);        
        let msg = randomMessages[msgIndex];
        return msg;
    }

    if(topic == 'movement')
    {
        let msgIndex = random(0, movementMessages.length -1, 1);        
        let msg = movementMessages[msgIndex];
        return msg;
    }

    return "";
}

exports.getMessage = getMessage;