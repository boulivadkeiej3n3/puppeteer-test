const HTTP = require("http");
const Puppeteer = require("puppeteer");
HTTP.createServer((req,res)=>{
 console.log(`REQUEST RECEIVED`)

res.end(`Hello world`);
}).listen(process.env.PORT,()=>console.log(`ServerIslistening`))


async function main(){
const Page = (await (await Puppeteer.launch()).pages())[0];
  await Page.goto("https://google.com/");
  await Page.screenshot({path:"wowo.png"})
}
