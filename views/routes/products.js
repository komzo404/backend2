import { Router } from "express"
import { title } from "process"
const router = Router()

router.get('/',(req,res)=>{
    res.render('index',{
        title: "BOOM Shop| Komzo"
    })
})


router.get('/products',(req,res)=>{
    res.render('products',{
        title:"Products | Komzo"
    })
})
router.get('/add',(req,res)=>{
    res.render('add',{
        title:"ADD Products | Komzo"
    })
})
export default router