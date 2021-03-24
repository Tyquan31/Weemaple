const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');

module.exports = class Database
{
    constructor(app, connectionString, sessionSecret)
    {
        this.app = app;
        this.connectionString = connectionString;
        this.sessionSecret = sessionSecret;
    }

    Initialize()
    {
        mongoose.connect(`mongodb://localhost:27017/${this.connectionString}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

        this.app.use(session({
            secret: this.sessionSecret,
            resave: false,
            saveUninitialized: true,
            // store: new MongoStore({
            //     mongooseConnection: mongoose.connection
            // }),
            cookie: {
                maxAge: 180 * 60 * 1000
            }
        }));

        console.log('Connected');
    }
}