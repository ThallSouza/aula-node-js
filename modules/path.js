const path = require("path");

// Basename = Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Dirname = Nome do diretório atual
console.log(path.dirname(__filename));

// Extname = Extenção do arquivo
console.log(path.extname(__filename));

// Parse = Criar objeto Path
console.log(path.parse(__filename));

// Join = Juntar caminhos de arquivos
console.log(path.join(__dirname, "teste", "teste.html"));
