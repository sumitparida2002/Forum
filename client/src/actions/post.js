import * as api from '../api/post.js'

export const createPost=async (newPost)=>{
    try {
        await api.createPost()    
    } catch (error) {
        console.log(error.message);
    }
}


export const getPosts= async ()=>{
    try {
    const data=await api.getPosts()
    return data
    } catch (error) {
        console.log(error.message);
    }
}

