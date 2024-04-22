import express from 'express';
import morgan from 'morgan';
import booksRouter from './router/book.router.js'
class Server{

    private app: express.Express
    private port: number = 3000;
    private host: string = '127.0.0.1';
    
    constructor(){
        this.app = express();
        this.config();
        this.routes();
        this.start();
    }

    private config(){
        this.app.use(express.json());
        this.app.use(morgan('dev'));
    }

    private routes(){
        //this.app.use(informesRouter.router);
        this.app.use('/api', booksRouter.router);
    }

    private start(){
        this.app.listen(this.port, this.host, ()=>{
            console.log(`Listen on http://${this.host}:${this.port}/`);
        });
    }
}

new Server();