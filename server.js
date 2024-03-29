// Server.js - This file is the initial starting point for the Node/Express server.
// ******************************************************************************
// *** Dependencies

var express = require("express");
var data = require("./app/data/friends.js");
// Sets up the Express App

var app = express();
var PORT = process.env.PORT || 3306;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
// app.use(express.static("public"));

// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



// Starting our Express app
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
