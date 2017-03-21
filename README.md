# KueListener

Listens to remote kues for job completion. 

```

var KueListener = require("./KueListener");
var kuelistener = new KueListener({"host": "172.18.0.6"}, function(){
    console.log("job completed");   
});

```


