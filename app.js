// Importing required packages
const http = require('http');
const express = require('express');
const app = express();
app.set('port', process.env.PORT || 3000); // Application port is set
app.set('views', __dirname + '/app/server/views'); // Views folder is set
app.set('view engine', 'ejs'); // View engine is set
app.use(express.static(__dirname + '/app/public')); // Public folder containing static files is set
require('./app/routes')(app); // Routes are imported

// Only start the server if this file is run directly (e.g. `node app.js`)
// When required by tests, this block is skipped — Supertest spins up its own
// temporary server internally and tears it down automatically after each test.
if (require.main === module) {
    http.createServer(app).listen(app.get('port'), function () {
        console.log('The application is running on port ' + app.get('port'));
    });
}

module.exports = app;
