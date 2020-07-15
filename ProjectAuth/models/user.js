const mongoose = requrie('mongoose');

//Create user schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }

});

//Create, instantiate and export the schema
const Users = mongoose.model("User", UserSchema);
module.exports = User;