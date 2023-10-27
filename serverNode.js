//ECS6 imports exports ----- require
const http = require("node:http");

const servidor = http.createServer((req, res) => {
  //bienvenida a la pagina de inicio
  //enrutamiento

  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Bienvenidos a la Pagina Principal");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Acerca de nosotros");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Contactos al telefono 4657684324687");
  } else {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Pagina no encontrada");
  }
});

const port = 5000;

servidor.listen(port, () =>
  console.log(`Servidor escuchando en el puerto ${port}`)
);
