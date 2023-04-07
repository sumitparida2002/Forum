import mongoose from 'mongoose'

const postSchema=mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var post = mongoose.model('post', postSchema);

export default post;