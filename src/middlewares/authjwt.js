import jwt from "jsonwebtoken";

import config from "../config/config";

import User from "../models/User";
import Role from "../models/Role";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token) return res.status(403).json({ message: "No token provide" });

    const decoded = jwt.verify(token, config.SECRET);

    req.userId = decoded.id

    const user = await User.findById(decoded.id, { password: 0 });
    if (!user) return res.status(404).json({ message: "no user found" });

    console.log(decoded);
    next();
  } catch(error) {
      console.error(error);
      return res.status(401).json({message: 'Invalid token'})
  }
};

export const isUser = async (req,res,next) =>{

}
export const isAdmin = async (req,res,next) =>{
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in:user.roles}})
    console.log(roles);

    for(let i = 0; i<roles.length; i++){
        if (roles[i].name === "admin"){
            console.log("Dentro del for: ",roles[i].name);
            next()
            return;
        } 
    }
    return res.redirect('/')
}
