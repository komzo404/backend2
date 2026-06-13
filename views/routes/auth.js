import { Router } from "express"
import User from "../models/User.js"
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

router.post('/register',async(req,res)=>{
    console.log(req.body);
    const Userdata={
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password,
    }
    console.log(Userdata);

   const user= await User.create(Userdata)
   console.log(user);
    res.redirect('/');
}) 
 

export default router