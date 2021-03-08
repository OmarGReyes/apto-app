import User from '../models/User'
import Role from '../models/Role'
import jwt from 'jsonwebtoken'
import config from '../config/config'
import { token } from 'morgan';

export const signUp = async (req,res)=>{
    const {username,email,password,roles}= req.body;

    User.find

    const newUser = new User ({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    if(roles){
        const foundRoles = await Role.find({name: {$in: roles}});
        newUser.roles = foundRoles.map(role =>role._id)
        
    } else{
        const role = await Role.findOne({name: "user"})
        newUser.roles = [role._id]
        
    }

    const savedUser = await newUser.save();

    const token = jwt.sign({id: savedUser._id},config.SECRET,{
        expiresIn: 86400
    })

    
    console.log(token)
    res.status(200).json({token})
}


export const signIn = async (req,res)=>{
    const {email, password} = req.body
    const userFound = await User.findOne({email: email})
    
    if(!userFound) return res.status(400).json({message: "User not found"})
    console.log(userFound)
    const matchPassword = await User.comparePassword(password, userFound.password)

    if(!matchPassword) return res.status(401).json({token: null, message: 'Invalid password'})

    const token = jwt.sign({id: userFound._id}, config.SECRET,{
        expiresIn: 86400
    })
    res.json({token})

    
    
}