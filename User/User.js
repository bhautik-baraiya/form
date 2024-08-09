const Express = require('express');
const Router = Express.Router();
const User = require('../Model/User/User');

// Get All User Router 

Router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(201).json(users);
    } catch (error) {
        console.log(error);
    }
})

Router.post('/users', (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = user.save();

        res.status(201).json(savedUser);
        // res.status(201).json();
    } catch (error) {
        console.log(error);
    }
});

module.exports = Router;