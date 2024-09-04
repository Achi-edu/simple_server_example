let myHttp = require("http");

let myServer = myHttp.createServer(
  // pass a complete function run whjen the server receives an http request
  function (myRequest, myResponse) {
    console.log(myRequest.url);
  
    let myResponseToggle;
    
    if (myRequest.url == "/hi") { 
      myResponseToggle = "is ";
    } else {
      myResponseToggle = "is not /hi, it is ";
    }
    
    let myResponseAction = "The url " + myResponseToggle + myRequest.url + "!\nOh.. and I always played the Wizard in Gauntlet, so Elf was not about to die on my watch!";
    

    myResponse.writeHead(200, {
      "Content-Type": "text/plain",
    });
    myResponse.end(myResponseAction);
  },
);

// listen()  tcp port and IP
myServer.listen(80, "0.0.0.0");