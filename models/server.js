const express = require("express");
const cors = require('cors')

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios"

    //middlewares
    this.middlewares()
    //rutas de mi app
    this.routes();
  }

  middlewares(){
    //CORS    
    this.app.use(cors())

    //Parseo y lectura del body
    this.app.use(express.json())
    //directorio publico
    this.app.use(express.static("public"))
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/user" ));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(this.port);
    });
  }
}
module.exports = Server;