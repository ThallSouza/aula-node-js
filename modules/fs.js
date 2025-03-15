const fs = require("fs");

const path = require("path");

// mkdir = Criar uma pasta]
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Error:", error);
  }
  console.log("Pasta criada com sucesso!");
});

// writeFile = Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "hellow Node!",
  (error) => {
    if (error) {
      return console.log("Error:", error);
    }
    console.log("Arquivo criado com sucesso");
  }
);

// appendFile = Adicionar a um arquivo
fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hellow Thales",
  (error) => {
    if (error) {
      return console.log("Error:", error);
    }
    console.log("Arquivo editado com sucesso");
  }
);

// readFile = Ler um arquivo
fs.readFile(
  path.join(__dirname, "/test", "text.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("Error: ", error);
    }
    console.log("Testo: ", data);
  }
);
