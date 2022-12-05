const HTTP = require("http")
HTTP.createServer((req,res)=>{
 console.log(`REQUEST RECEIVED`)
res.end(`Hello world`);
}).listen(443,"0.0.0.0",()=>console.log(`ServerIslistening`))
