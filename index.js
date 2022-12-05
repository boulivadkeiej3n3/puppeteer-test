const HTTP = require("http")
HTTP.createServer((req,res)=>{
 console.log(`REQUEST RECEIVED`)
res.end(`Hello world`);
}).listen(443,()=>console.log(`ServerIslistening`))
