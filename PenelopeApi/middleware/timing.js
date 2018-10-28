var parse = require('date-fns/parse');
var moment = require('moment');
const fs = require('fs');

const minutesThreshold = 2;

function canSendSms(cache){
    try{
        let cachedValue = cache.get( "lastSmsTime" );
        console.log("cached: " + cachedValue);
        if ( cachedValue == undefined ){
            console.log("returning true");
            return true;
        }
        
        var lastSmsTime = moment(cachedValue);
        console.log(lastSmsTime + " lastSmsTime");

        var currentTime = new moment(new Date());
        console.log(currentTime + " currentTime");

        var elapsedMinutes = moment.duration(currentTime.diff(lastSmsTime)).asMinutes();
        console.log(elapsedMinutes + " elapsedMinutes");

        if(elapsedMinutes > minutesThreshold)
            return true;

        return false;        
    }
    catch(err)
    {
        console.log(err);
        return false;
    }
}

function update(cache){    
        cache.set( "lastSmsTime", new Date().toISOString(), function( err, success ){
        if( !err && success ){
            console.log( success );              
        }
    });        
}

exports.canSendSms = canSendSms;
exports.update = update;
