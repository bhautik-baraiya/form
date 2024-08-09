const mongoose = require('mongoose');

const PostModel = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    caption: {
        type: String,
        required: false
    },
    imgURL: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: false
    },
    comments: {
        type: [],
        required: false
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Post', PostModel)