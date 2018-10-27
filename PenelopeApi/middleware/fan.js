
function start(req,res){
    console.log('started fan');
    
    res.setHeader('Content-Type', 'text/plain');
    res.end("Fan started \n");   
}

exports.start = start;
