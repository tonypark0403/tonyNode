exports.createUser = function(req, res) {
    // Todo : db check code
    res.send("Create user.");
}

exports.readUser = function(req, res) {
    res.send("Check user.");
}

exports.updateUser = function(req, res) {
    res.send("Update user.");
}

exports.deleteUser = function(req, res) {
    res.send("Delete user.");
}