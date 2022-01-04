const mongoose = require('mongoose');
const validator = require('validator');

const emoployeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter first name'],
        trim: true,
        maxlength: [20, 'Emoplyee first name cannot exceed 20 chars']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter last name'],
        trim: true,
        maxlength: [20, 'Emoplyee last name cannot exceed 20 chars']
    },
    birthDate: {
        type: Date,
        required: [true, 'Please enter employee birthdate']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email address']
    },
    position: {
        type: String,
        required: [true, 'Please enter employee position'],
    },
    salary: {
        type: Number,
        default: 15000
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Empployee', emoployeeSchema);