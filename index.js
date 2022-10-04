const path = require("path")
const fs = require("fs");

fs.mkdir("timestamp", function (err, path) {
    if (err) throw err;
    fs.writeFile("./timestamp/current date-time.txt", function (err) {
        if (err) throw err;
        console.log("file created")
    });
});

fs.readFile("./timestamp/current date-time.txt",'utf-8',function(err,data){
    if(err)  throw err;
    console.log(data);
})