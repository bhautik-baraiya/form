const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    bdate: {
        type: String,
        required: true
    },
    university: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('User', UserModel);
