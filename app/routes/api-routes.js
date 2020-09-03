const router = require("express").Router();
const request = require("request");
const connection = require("../config/connectmySQL");
const db = require("../models");
const passport = require("../config/passport.js");

// routes for our user_db===================================================================================
router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("post /api/login");
  res.json({
    email: req.user.email,
    id: req.user.id,
  });
});

router.post("/signup", (req, res) => {
  console.log("post /api/signup");
  db.User.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then(() => {
      res.redirect(307, "/api/login");
    })
    .catch((err) => {
      res.status(401).json(err);
    });
});

router.get("/user_data", (req, res) => {
  // console.log(req.user);
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  }
});

// Route for logging user out
router.get("/logout", (req, res) => {
  console.log("Logout");
  req.logout();
  res.redirect("/");
});

// routes for superhero api database=====================================================================
router.get("/hero/:name", (req, res) => {
  console.log("get /api/hero/" + req.params.name);
  var baseUrl = "http://superheroapi.com/api/";
  var volonnninoToken = "10223684788131570";
  var searchParam = "/search/" + req.params.name;
  var superheroQuery = baseUrl + volonnninoToken + searchParam;
  console.log("supeheroQuery: ", superheroQuery);

  request({ url: superheroQuery }, (error, response, body) => {
    // if (error || response.status !== 200) {
    //   return res.status(500).json({ type: "error", message: err.message });
    // }

    body = JSON.parse(body);

    if (body.results === undefined) {
      console.log("==================================================");
      console.log("Error!! Superhero does not exist");
      return res.json({
        type: "error",
        message: "Hero does not exist in this universe's source",
      });
    }
    var results = body.results.filter((hero) => {
      return hero.name.toLowerCase() === req.params.name.toLowerCase();
    });
    // console.log("**********results: ", results);
    // grabbing information on the hero searched
    res.json(results);

    console.log("hero: ", results);
    var heroName = results[0].name;
    console.log("heroName: ", heroName);
    var alignment = results[0].biography.alignment;
    var hero_id = results[0].id;
    var imageURL = results[0].image.url;
    // console.log("imageURL: ", imageURL);
    var powerstats = results[0].powerstats;
    // console.log("powerstats: ", powerstats);
    const stats = powerstats;
    const keys = Object.keys(stats);
    const values = Object.values(stats);
    const entries = Object.entries(stats);
    var total_power = 0;
    for (var i = 0; i < values.length; i++) {
      total_power += parseInt(values[i]);
    }
  });
  // .catch(function (error) {
  // console.log("SUPERHERO DOES NOT EXIST: ", error);
  // });
});

router.post("/hero/:name", (req, res) => {
  console.log("post /api/hero/" + req.params.name);
  console.log("=========================================");
  var baseUrl = "http://superheroapi.com/api/";
  var volonnninoToken = "10223684788131570";
  var searchParam = "/search/" + req.params.name;
  var superheroQuery = baseUrl + volonnninoToken + searchParam;
  console.log("supeheroQuery: ", superheroQuery);

  request({ url: superheroQuery }, (error, response, body) => {
    // if (error || response.status !== 200) {
    //   return res.status(500).json({ type: "error", message: err.message });
    // }

    body = JSON.parse(body);
    console.log("========================================");
    console.log("response: ", body);

    if (body.results === undefined) {
      console.log("==================================================");
      console.log("Error!! Superhero does not exist");
      return res.json({
        type: "error",
        message: "Hero does not exist in this universe's source",
      });
    }
    var results = body.results.filter((hero) => {
      return hero.name.toLowerCase() === req.params.name.toLowerCase();
    });
    // grabbing information on the hero searched
    // res.json(results);

    console.log("hero: ", results);
    var heroName = results[0].name;
    console.log("heroName: ", heroName);
    var alignment = results[0].biography.alignment;
    var hero_id = results[0].id;
    var imageURL = results[0].image.url;
    // console.log("imageURL: ", imageURL);
    var powerstats = results[0].powerstats;
    // console.log("powerstats: ", powerstats);
    var stats = powerstats;
    var keys = Object.keys(stats);
    var values = Object.values(stats);
    var entries = Object.entries(stats);
    var total_power = 0;
    for (var i = 0; i < values.length; i++) {
      total_power += parseInt(values[i]);
    }
    db.Hero.findOne({
      where: {
        name: heroName,
      },
    }).then(function (dbHero) {
      if (dbHero === null) {
        console.log("Will Add Hero....");
        db.Hero.create({
          name: heroName,
          hero_id: parseInt(hero_id),
          intel: parseInt(results[0].powerstats.intelligence),
          strength: parseInt(results[0].powerstats.strength),
          speed: parseInt(results[0].powerstats.speed),
          durability: parseInt(results[0].powerstats.durability),
          power: parseInt(results[0].powerstats.power),
          combat: parseInt(results[0].powerstats.combat),
          total_power: total_power,
          alignment: alignment,
          img_url: imageURL,
        }).then(() => {
          var query = "SELECT * FROM Heros";
          connection.query(query, function (err, res) {
            if (err) throw err;
            console.table(res);
          });
          res.json({ message: "Hero has been added to your universe!" });
        });
      } else {
        console.log("==================================================");
        console.log("Hero is already in database");
        res.json({ message: "Hero already exists in your universe!" });
      }
    });
  });
});

// export router to make it available in server
module.exports = router;
