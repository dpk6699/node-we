const http = require("http");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
  switch (path) {
    case "":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("HomePage");
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("AboutPage");
      break;

    default:
    case "":
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
      break;

      break;
  }
});

server.listen(port, () => {
  console.log(
    `Server is started on port : ${port}` + `\npress Ctrl-C to terminate server`
  );
});
