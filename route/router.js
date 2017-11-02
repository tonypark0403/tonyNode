const express = require('express');
const route = express.Router();
const user = require('../controller/user');

route.route('/user')
    .post(user.createUser)
    .get(user.readUser)
    .put(user.updateUser)
    .delete(user.deleteUser);

// route.get('/user', function (err, res) {
//     res.send("Check user!");
// })
//
// route.post('/user', function (err, res) {
//     res.send("Create user!");
// })

module.exports = route;