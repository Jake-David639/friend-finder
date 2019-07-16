// dependencies
//-------------------------------------------------------
var path = require("path");

// routes
//-------------------------------------------------------
module.exports = (app) => {
  
  // get route for the survey page
  app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // default to home page for all other routes
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};
