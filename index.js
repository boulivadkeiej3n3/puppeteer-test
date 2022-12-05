const HTTP = require("http");
HTTP.createServer((req,res)=>{
 console.log(`REQUEST RECEIVED`)
res.end(`Hello world`);
}).listen(process.env.PORT,()=>console.log(`ServerIslistening`))
