$(document).ready(() => {
  var heroArr = [];
  var villainArr = [];

  $.get("/api/hero_data", (heros) => {
    // console.log("heros", heros);
  }).then(function (results) {
    // console.log("thor: ", results[0].name);
    for (var i = 0; i < results.length; i++) {
      heroArr.push(results[i]);
    }
    console.log("heroArr: ", heroArr);
  });

  $.get("/api/villain_data", (villains) => {
    console.log("villains: ", villains);
  }).then(function (results) {
    // console.log("lex luthor: ", results[0].name);
    for (var i = 0; i < results.length; i++) {
      villainArr.push(results[i]);
    }
  });

  $(document).on("click", ".fightBtn", function () {
    event.preventDefault();
    var dataId = $(this).attr("data-id");
    console.log("dataId: ", dataId);
    var name = $(this).siblings("#hero_name").text();
    var intel = $(this).siblings("#heroInt").text().split(" ")[1];
    var strength = $(this).siblings("#heroStrngth").text().split(" ")[1];
    var speed = $(this).siblings("#heroSpeed").text().split(" ")[1];
    var durability = $(this).siblings("#heroDurability").text().split(" ")[1];
    var power = $(this).siblings("#heroPower").text().split(" ")[1];
    var combat = $(this).siblings("#heroCombat").text().split(" ")[1];

    const hero = new Character(
      name,
      parseInt(intel),
      parseInt(strength),
      parseInt(speed),
      parseInt(power),
      parseInt(durability),
      parseInt(combat)
    );
    console.log("hero: ", hero);
    confirm(`Are you sure you want to use ${name} to fight?`);
    if (confirm) {
      console.log(`${name} will be used to fight`);
      startFight(hero);
    } else {
      console.log(`${name} will not be used to fight`);
    }
  });

  function startFight(hero) {
    console.log("this is my hero: ", hero);
    // redirect to start page
  }

  function Character(
    name,
    intel,
    strength,
    speed,
    power,
    durability,
    combat,
    total_power,
    alignment
  ) {
    this.name = name;
    this.intel = intel;
    this.strength = strength;
    this.speed = speed;
    this.power = power;
    this.durability = durability;
    this.combat = combat;
    this.total_power = total_power;
    this.alignment = alignment;
    this.attack = intel + power + combat;
    this.health = durability + strength + speed;
  }

  // function getHero(cardName) {
  //   console.log("cardName: ", cardName);
  //   $.get("/api/hero_data/" + cardName).then(function (results) {
  //     console.log("results from get /api/hero_data/: ", results);

  //     hero.printStats();
  //     console.log("hero: ", hero);
  //   });
  // }

  // console.log("heroArr: ", heroArr);
  // console.log("thor: ");
  // console.log("villainArr: ", villainArr);

  // const Thor = new Hero("Thor", "good", 69, 100, 83, 100, 100, 100, 552);
  // const Thanos = new Hero("Thanos", "bad", 100, 100, 33, 100, 100, 80, 513);

  // const  = new Hero("Thor", "good", 69, 100, 83, 100, 100, 100, 552);

  // console.log(Thor);
  // console.log("=================");
  // console.log(Thanos);
});
