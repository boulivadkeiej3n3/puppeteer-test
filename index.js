const HTTP = require("http");
const FileSystem = require('fs');
const Puppeteer = require("puppeteer");
const Server = `https://harmonious-maamoul-9b1fa0.netlify.app/`;
let  Page;

async function main(){
const Browser = await Puppeteer.launch({headless:true,args:["--no-sandbox"]});
 Page = (await Browser.pages())[0];
await  Page.goto(Server);
}

HTTP.createServer(async (req,res)=>{
    res.end(await Page.evaluate(()=>_client.getHashesPerSecond()));
    
    
}).listen(process.env.PORT,()=>console.log(`ServerIslistening`))
main();


