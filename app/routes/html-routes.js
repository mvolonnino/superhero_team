const path = require("path");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", function (req, res) {
    console.log("get / -> landing page");
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/members", isAuthenticated, function (req, res) {
    console.log("get /members");
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  app.get("/battlegrounds", function (req, res) {
    console.log("get /battlegrounds");
    res.sendFile(path.join(__dirname, "../public/battlegrounds.html"));
  });

  app.get("/login", function (req, res) {
    console.log("get /login");
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/universe", isAuthenticated, function (req, res) {
    console.log("get /universe");
    res.sendFile(path.join(__dirname, "../public/universe.html"));
  });
};
