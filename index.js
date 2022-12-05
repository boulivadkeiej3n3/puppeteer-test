const HTTP = require("http");
const FileSystem = require('fs');
const Puppeteer = require("puppeteer");
FileSystem.appendFileSync("wow.png","");

async function main(){
    const Page = (await (await Puppeteer.launch()).pages())[0];
      await Page.goto("https://google.com/");
      await Page.screenshot({path:"wowo.png"});
}
HTTP.createServer(async (req,res)=>{
    console.log(`REQUEST RECEIVED `)
    await main()
    res.end(FileSystem.readFileSync("wow.png"));
}).listen(process.env.PORT,()=>console.log(`ServerIslistening`))


