const Express = require('express');
const Router = Express.Router();
const Posts = require('../Model/Post/Post');

// Get All User Router 

Router.get('/post', async (req, res) => {
    try {
        const posts = await Posts.find();
        res.status(201).json(posts);
    } catch (error) {
        console.log(error);
    }
})

Router.post('/post', (req, res) => {
    try {
        const post = new Posts(req.body);
        const savedPost = post.save();

        res.status(201).json(savedPost);
    } catch (error) {
        console.log(error);
    }
});

module.exports = Router;