import { Router } from "express";
import booksControllers from "../controllers/book.controller";

class BookRouter {

    router:Router;

    constructor(){
        this.router = Router();
        this.config();
    }

    private config(){
        this.router.route('/books').get(booksControllers.get);
    }
}

export default new BookRouter();

