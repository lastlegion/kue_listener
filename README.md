# KueListener

Listens to remote kues for job status events. 


## Example: 

```

var KueListener = require("./KueListener");
var kuelistener = new KueListener({"host": "172.18.0.6"}, function(message){
    console.log(message);   
});

```


## Messages

Returns the following messages, with events: `enqueue`, `start` and `complete` 

* `{"id":198,"event":"enqueue","args":["enqueue","analysisJob"]}`
* `{"id":198,"event":"start","args":["start","analysisJob",null]}`
* `{"id":198,"event":"complete","args":["complete",null,null]}`



