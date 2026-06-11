import { Router } from "express"
const router = Router()

router.get('/register',(req,res)=>{
    res.render('register',{
        title: "Login | Komzo",
        isregister:true,
    })
})
router.get('/login',(req,res)=>{
    res.render('login',{
        titel: "Login | Komzo ",
        islogin:true,
    })
})

router.post('/login',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
}) 

router.post('/register',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
}) 
 

export default router