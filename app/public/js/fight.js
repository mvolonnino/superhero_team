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
    cardName = $(this).siblings("#hero_name").text();
    // console.log("cardName: ", cardName);
    getHero(cardName);
  });

  function getHero(cardName) {
    console.log("cardName: ", cardName);
    $.get("/api/hero_data/" + cardName)
      .then(function (results) {
      console.log("results from get /api/hero_data/: ", results);
      function Character(
        name,
        alignment,
        intel,
        strength,
        speed,
        // durability,
        // power,
        power,
        durability,
        combat,
        total_power
      ) {
        this.name = name;
        this.alignment = alignment;
        this.intel = intel;
        this.strength = strength;
        this.speed = speed;
        this.power = power;
        this.durability = durability;
        this.combat = combat;
        this.total_power = total_power;
        this.attack = intel + power + combat;
        this.health = durability + strength + speed;
      }

      Character.prototype.printStats = function () {
        console.log(
          "Name: " +
            this.name +
            "\nAlignment: " +
            this.alignment +
            "\nIntelligence: " +
            this.intel +
            "\nStrength: " +
            this.strength +
            "\nSpeed: " +
            this.speed +
            "\nPower: " +
            this.power +
            "\nDurability: " +
            this.durability +
            "\nCombat: " +
            this.combat +
            "\nTotal Power: " +
            this.total_power +
            "\nAttack: " +
            this.attack +
            "\nHealth: " +
            this.health
        );
      };
      const hero = new Character(
        results.name,
        results.alignment,
        results.intel,
        results.strength,
        results.speed,
        results.power,
        results.durability,
        results.combat,
        results.total_power
      );
      hero.printStats();
      console.log("hero: ", hero);
      return hero;
    });
  }

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
