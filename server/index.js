import mongoose from "mongoose";
import express from "express";
import cors from 'cors'

import post from './routes/postRoutes.js'

const app=express()

app.use(cors()) // Use this after the variable declaration
app.use(express.json())


app.use('/posts',post)



const CONNECTION_URL = 'mongodb+srv://sumitparida:sumitparida123@cluster0.nkgtjd8.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>app.listen(5000,() => console.log(`Server Running on Port: http://localhost:5000`)))
.catch((error) => console.log(`${error} did not connect`));
