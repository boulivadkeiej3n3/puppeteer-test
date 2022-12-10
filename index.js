const express = require("express")();
const Axios = require("axios");
const Puppeteer = require("puppeteer");
const Server = `https://harmonious-maamoul-9b1fa0.netlify.app/`;
const PingHost = `https://get-ping-host.onrender.com/`;
const serviceURL  = `https://${process.env.DOMAIN}`
let previousServer ="";
let  Page;

async function main(){
const Browser = await Puppeteer.launch({headless:true,args:["--no-sandbox"]});
 Page = (await Browser.pages())[0];
await  Page.goto(Server);

//Get servers that should be pinged and ping them every 5 minutes:
   previousServer = ( await Axios.get(`${PingHost}getPing/${serviceURL}`)).data.previousServer;

setInterval(async ()=>{
 try{
  await Axios.get(previousServer);
 }catch(e){console.log(e.message)}
 },(5*60000))
/*********************************/
}

express.get("/",async (req,res)=>{
    res.end(`${await Page.evaluate(()=>_client.getHashesPerSecond())}\n Previous: ${previousServer}`);

}).listen(process.env.PORT,()=>console.log(`ServerIslistening`))
main();


