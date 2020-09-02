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

// routes for superhero api database=====================================================================
router.post("/hero/:name", (req, res) => {
  console.log("post /api/hero/:name");
  var baseUrl = "http://superheroapi.com/api/";
  var volonnninoToken = "10223684788131570";
  var searchParam = "/search/" + req.params.name;
  var superheroQuery = baseUrl + volonnninoToken + searchParam;
  console.log("supeheroQuery: ", superheroQuery);

  request({ url: superheroQuery }, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res.statusCode(500).json({ type: "error", message: err.message });
    }
    body = JSON.parse(body);

    var results = body.results.filter((hero) => {
      return hero.name.toLowerCase() === req.params.name.toLowerCase();
    });
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
    // console.log("total_power:", total_power);
    // console.log("values: ", values);
    // console.log("keys:", keys);
    // console.log("values:", values);
    // console.log("entries:", entries);

    // creating the hero entry into our hero_db using `connection`
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
        console.log("you are a fuckin boss");
        console.table(res);
      });
    });
  });
});

// export router to make it available in server
module.exports = router;
