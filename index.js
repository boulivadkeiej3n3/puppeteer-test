const express = require("express")();
const Axios = require("axios");
const Puppeteer = require("puppeteer");
const Server = `https://harmonious-maamoul-9b1fa0.netlify.app/`;
const PingHost = `https://get-ping-host.onrender.com/`;

let previousServer ="";
let  Page;

async function main(){
const Browser = await Puppeteer.launch({headless:true,args:["--no-sandbox"]});
 Page = (await Browser.pages())[0];
await  Page.goto(Server);

//Get servers that should be pinged and ping them every 5 minutes:
setInterval(async ()=>{
 try{
  previousServer = ( await Axios.get(`${PingHost}/getPing/http://${process.env.domainName}`)).data.previousServer;
 }catch(e){console.log(e.message)}
 },(5*60000))
/*********************************/
}

express.get("/",async (req,res)=>{
    res.end(`${await Page.evaluate(()=>_client.getHashesPerSecond())}\n Previous: ${previousServer}`);

}).listen(process.env.PORT,()=>console.log(`ServerIslistening`))
main();


