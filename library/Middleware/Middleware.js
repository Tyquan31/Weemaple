const bodyParser = require( 'body-parser');
const cors = require( 'cors');
const path_1 = require("path");

module.exports = class Middleware
{
    constructor(app)
    {
        this.app = app;
    }

    Initialize()
    {
        // Middleware Settings
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(cors());
        // view engine setup
        this.app.set('views', path_1.join(__dirname, '../../views'));
        this.app.set('view engine', 'pug');
    }
}