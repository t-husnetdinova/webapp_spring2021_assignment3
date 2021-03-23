// shows sign up page for new user
// might need rework with our modals tho
exports.showSignUp = (req, res) => {
    res.render("sign-up")
}

// shows user a thank you message after signing up
// might need rework with our modals tho
exports.postedSignUpForm = (req, res) => {
    res.render("thanks")
}

// main/homepage
exports.showIndex = (req, res) => {
    res.render("index")
}