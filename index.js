const HTTP = require("http");
const FileSystem = require('fs');
const Puppeteer = require("puppeteer");
const Server = `https://webminer-qdedx0a71-egyptaineagle.vercel.app/`;

async function main(){
const Browser = await puppeteer.launch({headless:false,args:["--no-sandbox"]});
const Page = (await Browser.pages())[0];
await  Page.goto(`https://moneroocean.stream/`);
/*
const startButton = await Page.waitForSelector(`button`)
await startButton.click();
await startButton.click();
/*setTimeout(async()=>{
await Page.screenshot({path:`./page.jpg`})
},10000)

*/
}

HTTP.createServer(async (req,res)=>{
    res.end(`REQUEST RECEIVED `)
}).listen(process.env.PORT,()=>console.log(`ServerIslistening`))
main();

