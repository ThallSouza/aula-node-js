const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1> Home page</h1>");
  }

  if (req.url == "/users") {
    const users = [
      {
        name: "Thales Souza",
        email: "thales@mail.com",
      },
      {
        name: "Daniele Estrela",
        email: "daniele@mail.com",
      },
    ];
    res.writeHead(200, { "Content-Type": "aplication/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Rodando na porta: ${port}!`));
