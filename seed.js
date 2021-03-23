// helpful source: https://medium.com/@shannen.ye/setting-up-a-database-and-seed-file-7e73fe2a9fe6

// stuff here to generate random users
const Users = require("./models/user");

const userSeed = [
    {
        name: 'John',
        email: 'johnjohnson@mail.com',
        zipCode: "80111"
    },
    {
        name: 'Dan',
        email: 'dangreen@mail.com',
        zipCode: "80234"
    } ,
    {
        name: 'Jessica',
        email: 'jessie76@mail.com',
        zipCode: "90210"
    } 
]
const seed = () => {
    return Users.bulkCreate(userSeed);
}

seed()
.then(() => {
    process.exit();
});