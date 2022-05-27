const mongoose = require('mongoose');
let regWord = /^[a-zA-Z0-9]{5}[a-zA-Z0-9]*\s*\w*/;
// let regMail = /^[A-Z0-9a-z._%+-]{2}+@[A-Za-z0-9.-]{2}[A-Za-z0-9.-]*+\\.[A-Za-z]{2,64}/;

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        lowercase: true,
        validate: {
            validator: v => regWord.test(v),
            message: props => `${props.value} is not a valid User Name`
        }
    },
    password: {
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    info:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "InfoUser"
    },
    partner: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Partner"
    },
    createdAt: {
        type: Date,
        required: true,
        // inmutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        required: true,
        default: () => Date.now(),
    },
})

module.exports = mongoose.model('Users', userSchema)
