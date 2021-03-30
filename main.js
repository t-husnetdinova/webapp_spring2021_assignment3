// requirements 
const express = require("express"), app = express();
layouts = require("express-ejs-layouts"), mongoose = require("mongoose");
homeController = require("./controllers/homeController");
errorController = require("./controllers/errorController");
usersController = require("./controllers/usersController");

// connect mongo
mongoose.connect("mongodb://localhost:27017/assignment3", 
{useNewUrlParser: true});

app.set("port", process.env.PORT || 3001);

app.set("view engine", "ejs");
app.use(layouts);

// homepage
app.get("/", homeController.showIndex);

app.use(express.static("public"));

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());

// routes - will need to add our own
app.get("/sign-up", homeController.showSignUp);
app.post("/sign-up", homeController.postedSignUpForm);
app.get("/users", usersController.getAllUsers);
app.get("/sign-up", usersController.getUserPage); // this might make more sense as get subscribers than users
app.post("/sign-up", usersController.saveUser);

// error handling
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(`Server is running on port: ${app.get("port")}`)
});