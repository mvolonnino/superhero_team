// Dependencies
// =============================================================
const express = require("express");
const app = express();
const db = require("./app/models");
const passport = require("./app/config/passport");
// Sets up the Express App
const PORT = process.env.PORT || 8080;
const session = require("express-session");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DB connection
// require("./app/config/connection");

// Static directory to be served
app.use(express.static("app/public"));
// taking routes that exist in api-controller and mounting them on /api

// We need to use sessions to keep track of our user's login status
app.use(passport.initialize());
app.use(passport.session());
// Routes
// =============================================================
var apiRoutes = require("./app/routes/api-routes");
app.use("/api", apiRoutes);

// Here we introduce HTML routing to serve different HTML files
require("./app/routes/html-routes.js")(app);
// var htmlRoutes = require("./app/routes/html-routes");
// app.use()
// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
  });
});
