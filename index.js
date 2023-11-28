const app = require('./app');

app.start(3001).then(() => {
    console.log("Running");
});

module.exports = app;