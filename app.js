const http = require("http");
const fs = require("fs");

const logs = fs.createWriteStream("logs.txt");
const server = http.createServer((req, res) => {
  const url = req.url;

  if (url == "/" || url == "/index") {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.write("<h1> Ana Sayfadasınız... </h1>");
    logs.write(url.slice(1) + "\n");
    res.end();
  } else if (url == "/about") {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.write("<h1> Hakkımızda Sayfasındasınız... </h1>");
    logs.write(url.slice(1) + "\n");
    res.end();
  } else if (url == "/contact") {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.write("<h1> İletişim Sayfasındasınız... </h1>");
    logs.write(url.slice(1) + "\n");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
    res.write("404 NOT FOUND");
    logs.write("ERROR! " + url.slice(1) + "\n");
    res.end();
  }
});



const port = 3000;
server.listen(port, () => {
  console.log(`Server is started at port ${port}`);
});
