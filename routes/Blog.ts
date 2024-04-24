import {Router} from 'express'
import { checkAuth } from '../middleware/authMiddleware.js'
import {getAllBlog, getSingleBlog, createBlog, editBlog, deleteBlog} from '../controller/Blog.js'

const router = Router()


router.get('/blog', getAllBlog)
router.get('/api/blog/:id', getSingleBlog)
router.post('/blog',checkAuth, createBlog);  
router.put('/blog/:id',checkAuth, editBlog);
router.delete('/blog/:id',checkAuth, deleteBlog);

export default router