const { isNamedExportBindings } = require("typescript");

module.exports = class AppError
{

    constructor(app)
    {
        this.app = app;
    }

    InitializeFourFour()
    {
        this.app.use((req, res, next) => {
            var err = new Error('Not Found');
            err.status = 404;
            next(err);
        });

        this.app.use((err, req, res) => {
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};
            res.status(err.status || 500);
            res.json({
                message: err.message,
                error: err
            });
        });
    }
}