import path from 'path'
import { fileURLToPath } from 'url';
import {Request, Response} from "express";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const adminQueryFile = (req: Request, res: Response) => {
    const adminQueryPath = path.resolve(__dirname, '../../../Frontend/adminquery.html');
    res.sendFile(adminQueryPath);
}

export const adminArticleFile = (req: Request, res: Response) => {
    const adminArticlePath = path.resolve(__dirname, '../../../Frontend/adminarticle.html');
    res.sendFile(adminArticlePath);
}

export const adminAddArticleFile = (req: Request, res: Response) => {
    const adminAddArticlePath = path.resolve(__dirname, '../../../Frontend/adminaddarticle.html');
    res.sendFile(adminAddArticlePath);
}

export const adminEditArticleFile =  (req: Request, res: Response) => {
    const adminEditArticlePath = path.resolve(__dirname, '../../../Frontend/admineditarticle.html');
    res.sendFile(adminEditArticlePath);
}

