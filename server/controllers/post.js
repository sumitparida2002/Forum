import express from 'express'

import post from '../model/post.js'

const router = express.Router();


export const getPosts=async (req,res)=>{
  
    try {
        const Post=await post.find()
        res.status(200).json(Post);    
   }catch(error){
    res.status(404).json({error:error.message})
    
   }
}



export const createPost=async (req,res)=>{
        const {title,message,creator}=req.body
        const newPost=new post({title,message,creator})

    try {
        await newPost.save()
        res.status(201).json(newPost);
   }catch(error){
    res.status(409).json({error:error.message})
   }
}

export default router


