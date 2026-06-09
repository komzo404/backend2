import { Router } from "express"
const router = Router()

router.get('/register',(req,res)=>{
    res.render('register',{
        title: "Login | Komzo"
    })
})
router.get('/login',(req,res)=>{
    res.render('login',{
        titel: "Login | Komzo "
    })
})


export default router