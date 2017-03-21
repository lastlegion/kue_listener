var Redis = require('ioredis');
var events = require("events");


class KueListener {
    constructor(redis_host, complete_callback){
        this.host = redis_host.host || "127.0.0.1";
        this.port = redis_host.port || 6379;

        this.redis = new Redis({
            host: this.host,
            port: this.port 
        });
        
        this.redis.subscribe("q:events", function(err, count){
            if(err){
                throw(err);
            }

            
        });
        this.redis.on("message", function(channel, message){
            //console.log(message);
            var message = JSON.parse(message);
            //console.log(message);
            //console.log(message.event);
            if(message.event ==  'complete') 
                complete_callback();
        });
    }

}

module.exports = KueListener;
