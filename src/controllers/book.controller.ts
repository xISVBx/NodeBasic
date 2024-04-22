import { Request, Response, NextFunction } from "express";
import * as fs from "fs/promises";
import * as path from "path";

const get = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Construir la ruta al archivo JSON (en la raíz del proyecto)
        const filePath = path.join(__dirname, '../../src', 'database', 'amazon.books.json');

        // Cargar los datos del archivo JSON
        const rawData = await fs.readFile(filePath, "utf-8");
        const books = JSON.parse(rawData);
        res.status(200).json({ status: true, data: books });

    } catch (error) {
        console.log((error as Error).message);
        res.status(500).json({ status: false, message: 'Server internal error' });
    }
}

export default {
    get
}