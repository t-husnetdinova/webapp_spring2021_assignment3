const User = require("../models/user");

// function that retreives all user
exports.getAllUsers = (req, res) => {
    User.find({})
        .exec()
        .then(users => {
            res.render("users", {users: users})
        })
        .catch((error) => {
            console.log(error);
            return [];
        })
        .then(() => {
            console.log("promise complete");
        })
};

// function provides sign up page for users
exports.getUserPage = (req, res) => {
    res.render("sign-up");
};

// retrives the posted data from the req body and saves a new user
exports.saveUser = (req, res) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        zipCode: req.body.zipCode
    })
    newUser.save()
        .then(() => {
            res.render("thanks");
        })
        .catch(error => {
            res.send(error);
        })
};