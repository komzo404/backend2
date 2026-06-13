import express from "express"
import dotenv from "dotenv"

import path,{dirname} from 'path'
import {fileURLToPath} from "url";
import mongoose from "mongoose" 
import {engine} from "express-handlebars"
import AuthRoutes from './views/routes/auth.js'
import ProductsRoutes from '../back-end/views/routes/products.js'
const  __filename = fileURLToPath(import.meta.url)
const __dirname=dirname(__filename)
dotenv.config()
const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars',engine())
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.json())
app.use(AuthRoutes)
app.use(ProductsRoutes)
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
console.log(process.env.MONGO_URL);


async function dbConnect() {
  try {
    console.log(process.env.MONGO_URL);

    await mongoose.connect(process.env.MONGO_URL);

    console.log("Bazaga ulandi");
  } catch (err) {
    console.error(err);
  }
}

dbConnect();
const PORT=process.env.PORT || 4100
app.listen(PORT,()=>console.log(`Server isrunning on port: ${PORT}`))

