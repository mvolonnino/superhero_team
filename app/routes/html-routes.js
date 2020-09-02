const path = require("path");

module.exports = function (app) {
  app.get("/members", function (req, res) {
    console.log("get /members");
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  app.get("/signup", function (req, res) {
    console.log("get /signup");
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/", function (req, res) {
    console.log("get / -> landing page");
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function (req, res) {
    console.log("get /login");
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
};

