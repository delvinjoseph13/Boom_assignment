import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()


export const authorization=async(req,res,next)=>{
    const authHeader=req.headers['authorization'];
    const accessToken=authHeader && authHeader.split(' ')[1];
    if(!accessToken){
        return res.status(401).json({message:'Access denied. No token provided.'});        
    }
    jwt.verify(accessToken,process.env.SECRET_KEY,(err,user)=>{
        if(err){
            return res.status(403).json({message:'Token is invalid.'});
        }
        req.user=user;
        next();
    })
}
