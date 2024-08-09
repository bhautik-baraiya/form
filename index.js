const Express = require('express');
require('dotenv').config()
const BodyParser = require('body-parser');
const Cors = require('cors');
const Mongoose = require('mongoose');
const Server = Express();
const User = require('../Server/User/User');
const Post = require('../Server/Post/Post');

const PORT = process.env.PORT;
const DBURL = process.env.DBURL;

Mongoose.connect(DBURL).then(console.log('DB connected successfully'));

Server.use(BodyParser());
Server.use(Cors());
Server.use('/api/', User);
Server.use('/api/', Post);

Server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});