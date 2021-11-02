const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        this.middlewares();
        
        this.routes();
    }

    routes() {
        this.app.use( this.usuariosPath, require('../routes/usuarios.route'));
    }

    middlewares() {

        this.app.use( cors() );
        
        this.app.use( express.static('public') );

        this.app.use( express.json() );
    }

    listen() {
        this.app.listen( this.port , () => console.log('Servidor corriendo en el puerto: ', this.port ));
    }
}

module.exports = Server;