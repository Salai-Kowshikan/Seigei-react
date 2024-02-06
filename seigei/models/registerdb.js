const mongoose = require('mongoose');
const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 1024
    },
    password: {
        type: String,
        required: true,
        max: 1024
    }
});
const Registermodel = mongoose.model('Register', registerSchema);
module.exports = Registermodel;