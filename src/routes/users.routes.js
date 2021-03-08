import {Router} from 'express';
const router = Router();

router.get('/signin', (req,res)=>{
    res.render('users/signin')
})


router.get('/signup', (req,res)=>{
    res.render('users/signup')
})

router.post('/signup', (req,res)=>{
    
})
export default router