var moment = require('moment');

const secondsThreshold = 10;

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

        var elapsedSeconds = moment.duration(currentTime.diff(lastSmsTime)).asSeconds();
        console.log(elapsedSeconds + " elapsedSeconds");

        if(elapsedSeconds > secondsThreshold)
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

function set(sensorTemp, cacheKey, cache)
{    
    cache.set(cacheKey, sensorTemp, function( err, success ){
        if( !err && success ){
            console.log( success );              
        }
    });  
}

exports.canSendSms = canSendSms;
exports.update = update;
exports.set = set;
