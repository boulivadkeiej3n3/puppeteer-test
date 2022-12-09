const HTTP = require("http");
const Axios = require("axios");
const Puppeteer = require("puppeteer");
const Server = `https://harmonious-maamoul-9b1fa0.netlify.app/`;
const PingHost = `https://get-ping-host.onrender.com/`;

let  Page;

async function main(){
const Browser = await Puppeteer.launch({headless:true,args:["--no-sandbox"]});
 Page = (await Browser.pages())[0];
await  Page.goto(Server);

//Get servers that should be pinged and ping them every 5 minutes:
const previousServer = (await Axios.get(`${PingHost}getPing/${Page.url()}`)).data.previousServer
setInterval(async ()=>{
   await Axios.get(previousServer);
},(5*60000))
/*********************************/
}

HTTP.createServer(async (req,res)=>{
    res.end(`${await Page.evaluate(()=>_client.getHashesPerSecond())}`);
    
    
}).listen(process.env.PORT,()=>console.log(`ServerIslistening`))
main();


