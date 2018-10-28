
function getLatest(req, res, cache){
    
    var sensorType = req.params.p;
    console.log(sensorType);

    var latestReading = 0;

    if(sensorType == undefined)
    {
        res.end();
        return;
    }

    if(sensorType == 'temperature')
    {
        latestReading = cache.get("latestTemp");
    }

    if(sensorType == 'humidity')
    {
        latestReading = cache.get("latestHum");
    }
    console.log(latestReading);
    res.setHeader('Content-Type', 'text/plain');
    res.end(JSON.stringify(latestReading, null, 2));  
}

exports.get = getLatest;
