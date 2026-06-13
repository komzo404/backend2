import {Schema,model} from 'mongoose'

const UserSchma = new Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
})

const User= model("User",UserSchma)
export default User