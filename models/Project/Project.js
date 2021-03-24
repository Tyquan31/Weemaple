const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String
    },
    subTitle: {
        type: String
    },
    category: {
        type: String
    },
    fundingGoal: {
        type: Number
    },
    challenges: [{
        title: {
            type: String
        },
        description: {
            type: String
        }
    }],
    city: {
        type: String
    },
    state: {
        type: String
    },
    websitePage: {
        type: String
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    followers: {},
    publicFunders: [{
        name: {
            type: String
        },
        email: {
            type: String
        },
        amountGiven: {
            type: Number
        },
        datePosted: {
            type: Date,
            default: Date.now
        }
    }],
    description: {
        type: String
    },
    mainVideo: {
        type: String
    },
    videos: [{
        name: {
            type: String
        },
        link: {
            type: String
        }
    }],
    mainImage: {
        data: Buffer,
        contentType: String,
        path: String
    },
    targetLaunchDate: {
        type: Date
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: Date,
        default: Date.now
    }
});

module.exports =  mongoose.model('Project', ProjectSchema);