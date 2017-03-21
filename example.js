var KueListener = require("./KueListener");


var kuelistener = new KueListener({"host": "172.18.0.6"}, function(){
    console.log("triggered some event");   
});


