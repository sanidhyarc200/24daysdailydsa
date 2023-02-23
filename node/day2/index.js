
const http = require("http");

const PORT = 4000;
http
  .createServer((req, res) => {
    console.log("URL", req.url);
    if (req.url === "/") {
      res.write("Welcome to Main page");
      res.end();
    } else {
      res.write("No route found");
      res.end() ;
      
    }
    
  })
  .listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
  });