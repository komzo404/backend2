import express from "express"

import path,{dirname} from 'path'
import {fileURLToPath} from "url";
import {engine} from "express-handlebars"
import AuthRoutes from'../back-end/views/routes/auth.js'
import ProductsRoutes from '../back-end/views/routes/products.js'
const  __filename = fileURLToPath(import.meta.url)
const __dirname=dirname(__filename)

const app = express()


app.engine('handlebars',engine())
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(AuthRoutes)
app.use(ProductsRoutes)




const PORT=process.env.PORT || 4100
app.listen(PORT,()=>console.log(`Server isrunning on port: ${PORT}`))

