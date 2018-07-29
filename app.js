const say = require("say");
const WebSocket = require('ws');

const ws = new WebSocket("ws://localhost:5000/voicews");

ws.on("open", function(){
    console.log("ws connection established successfully");
});

ws.on("message", function(message){
    console.log("ws message received : " + message);
    var json = JSON.parse(message);
    if(json.type === "command"){
        say.speak(json.data, "Alex",1);
    }
});

ws.on("error", function(err){
    console.log("failed establishing ws connection : " + err);
});
