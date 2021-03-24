const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        default: 'N/A'
    },
    lastName: {
        type: String,
        default: 'N/A'
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    rating: {
        type: Number,
        default: 5
    },
    city: {
        type: String,
        default: 'N/A'
    },
    state: {
        type: String,
        default: 'N/A'
    },
    password: {
        type: String,
        required: true
    },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }]
});

module.exports = mongoose.model('User', UserSchema);