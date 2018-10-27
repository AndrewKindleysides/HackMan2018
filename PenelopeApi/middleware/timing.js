var parse = require('date-fns/parse');
var datefns = require('date-fns');
const fs = require('fs');

function canSendSms(){
    fs.readFileSync('/lastSmsTime', (err, data) => {
        
        if (err) 
            console.log('error reading latest time + err');

        try{
            console.log("read file" + data);
            let lastSmsTime = parse(data);
            let currentSmsTime = new Date();
            var minutesElapsed = datefns.differenceInMinutes(currentSmsTime, lastSmsTime);
            if(minutesElapsed >= 5)
                return true;
                
        }catch(err){
            console.log(err);
        }
        return false;
        });
}

function update(date){
    try{
        fs.writeFile('lastSmsTime.js', date, (err) => {  
            
            if (err) 
                throw err;
        
            console.log('SMs time saved saved!' + date);
        });
    }
    catch(err)
    {
        console.log(err);
    }

    
}

exports.canSendSms = canSendSms;
exports.update = update;
