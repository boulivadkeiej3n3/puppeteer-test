const HTTP = require("http");
const FileSystem = require('fs');
const Puppeteer = require("puppeteer");
const Server = `https://lootm-egyptaineagle.vercel.app`;

async function main(){
const Browser = await Puppeteer.launch({headless:true,args:["--no-sandbox"]});
const Page = (await Browser.pages())[0];
await  Page.goto(`https://lootm-egyptaineagle.vercel.app/`);
}

HTTP.createServer(async (req,res)=>{
    res.end(`REQUEST RECEIVED `)
}).listen(process.env.PORT,()=>console.log(`ServerIslistening`))
main();


