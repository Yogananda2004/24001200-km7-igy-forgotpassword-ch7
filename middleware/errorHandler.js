require('../config/instrument');
const Sentry = require('@sentry/node');

function errorHandler(err, req, res, next) {
    // console.error(err.stack);
    Sentry.captureException(err);

    if (err.status != 500) {
        return res.status(err.status).json({
            status: 'failed',
            message: err.message,
        });
    }

    res.status(500).json({
        status: 'failed',
        message: 'There was an error on the server',
    });
}

module.exports = errorHandler;
