const engine = require('./messageEngine');
const sms = require("./sms");
const timing = require("./timing");

function get(req,res, cache){
    
    try{
        
            let message = "Are you sleeping?";
            sms.send(message);
            timing.update(cache);

            res.setHeader('Content-Type', 'text/plain');
            res.write(message);  
            res.end(); 
            return;        
    }catch(err)
    {
        console.log(err);
        res.end(); 
    }    
}

exports.get = get;
