cosnt HTTP = require("http")
HTTP.createServer((req,res)=>{
res.end(`Hello world`);
}).listen(8080,"0.0.0.0",()=>console.log(`ServerIslistening`))
