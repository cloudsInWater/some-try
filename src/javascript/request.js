
function filego(url,options){
    const req = new XMLHttpRequest();
    req.open(options.type,url,true);
    if(options.contentType){
        req.setRequestHeader("Content-Type",options.contentType);
    }
    req.onreadystatechange=function(){
        if(req.readyState===XMLHttpRequest.DONE){
            options.done(req);
        }
    }
    req.send(options.data)
}

export {filego}