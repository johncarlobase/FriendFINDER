// DEPENDENCIES
var path = require("path");

// ROUTING
module.exports = (app) => {

    // HTML GET REQUEST TO SURVEY PAGE
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // HTML GET REQUEST CATCH ALL ROUTE TO HOME
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};