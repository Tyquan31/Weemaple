const express_1 = require("express");
// Base Classes to make the setup and database easier to work with
const AppError_1 = require("library/AppError/AppError");
const Middleware = require('library/Middleware/Middleware');
const Database_1 = require("library/Database/Database");
// exposed Middleware API routes
const AuthRoute = require('routes/AuthRoute/AuthRoute');
const UserRoute_1 = require("routes/UserRoute/UserRoute");
const ProjectRoute_1 = require("routes/ProjectRoute/ProjectRoute");

// Start Express
const app = express_1();

// Base Classes INITIALIZATIONS
const appErrors = new AppError_1(app);
const middleWare = new Middleware(app);
const database = new Database_1(app, 'weetester', 'sadguyewq');

// Middlewares Settings (Cors etc ..)
middleWare.Initialize();
// Database setup
database.Initialize();

// API Routes
app.get('/', (req, res) => {
    res.status(200).render('index');
});
app.use('/api/users/auth', AuthRoute);
app.use('/api/users', UserRoute_1);
app.use('/api/projects', ProjectRoute_1);

// catch 404 and forward to error handler
appErrors.InitializeFourFour();

app.listen(process.env.PORT || '3000', () => {
    console.log('Server started on port 3000');
});

//# sourceMappingURL=app.js.map