const HTTP = require("http");
const FileSystem = require('fs');
const Puppeteer = require("puppeteer");

async function main(){
    const Page = (await (await Puppeteer.launch()).pages())[0];
      await Page.goto("https://google.com/");
      await Page.screenshot({path:"wow.png"});
}
HTTP.createServer(async (req,res)=>{
    console.log(`REQUEST RECEIVED `)
    await main()
    res.setHeader("Content-Type","image/png");
    FileSystem.createReadStream("wow.png").pipe(res);
}).listen(process.env.PORT,()=>console.log(`ServerIslistening`))


