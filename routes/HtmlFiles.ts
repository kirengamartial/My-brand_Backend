import { Router } from 'express'
import {checkAuth} from '../middleware/authMiddleware.js'
import { adminQueryFile, adminArticleFile, adminAddArticleFile, adminEditArticleFile} from '../controller/HtmlFiles.js'

const router = Router()

router.get('/query', checkAuth, adminQueryFile);

router.get('/article', checkAuth, adminArticleFile);

router.get('/add_article', checkAuth, adminAddArticleFile);

router.get('/blogs/:id', checkAuth, adminEditArticleFile);



export default router