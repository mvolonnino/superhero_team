$(document).ready(() => {
  var heroArr = [];
  var villainArr = [];

  function makeVillainCharacter() {
    var name = $("#villain_name").text();
    var alignment = $("#villainAlignment").text().split(" ")[1];
    var total_power = $("#villainTotalPower").text().split(" ")[2];
    var intel = $("#villainIntel").text().split(" ")[1];
    var strength = $("#villainStrength").text().split(" ")[1];
    var speed = $("#villainSpeed").text().split(" ")[1];
    var durability = $("#villainDurability").text().split(" ")[1];
    var power = $("#villainPower").text().split(" ")[1];
    var combat = $("#villainCombat").text().split(" ")[1];
    const villain = new Character(
      name,
      alignment,
      parseInt(total_power),
      parseInt(intel),
      parseInt(strength),
      parseInt(speed),
      parseInt(power),
      parseInt(durability),
      parseInt(combat)
    );
    console.log("Villain Character: ", villain);
  }

  $(document).on("click", ".fightBtn", function () {
    event.preventDefault();
    var dataId = $(this).attr("data-id");
    console.log("dataId: ", dataId);
    var name = $(this).siblings("#hero_name").text();
    var intel = $(this).siblings("#heroInt").text().split(" ")[1];
    var strength = $(this).siblings("#heroStrength").text().split(" ")[1];
    var speed = $(this).siblings("#heroSpeed").text().split(" ")[1];
    var durability = $(this).siblings("#heroDurability").text().split(" ")[1];
    var power = $(this).siblings("#heroPower").text().split(" ")[1];
    var combat = $(this).siblings("#heroCombat").text().split(" ")[1];
    var alignment = $(this).siblings("#heroAlignment").text().split(" ")[1];
    console.log("alignment: ", alignment);
    var total_power = $(this).siblings("#heroTotalPower").text().split(" ")[2];
    console.log("total power: ", total_power);

    const hero = new Character(
      name,
      alignment,
      parseInt(total_power),
      parseInt(intel),
      parseInt(strength),
      parseInt(speed),
      parseInt(power),
      parseInt(durability),
      parseInt(combat)
    );
    console.log("Hero Character: ", hero);
    confirm(`Are you sure you want to use ${name} to fight?`);
    if (confirm) {
      console.log(`${name} will be used to fight`);
      makeVillainCharacter();
      startFight(hero);
    } else {
      console.log(`${name} will not be used to fight`);
    }
  });

  function startFight(hero) {
    // console.log("this is my hero: ", hero);
    // redirect to start page
  }

  // Character Models
  function Character(
    name,
    alignment,
    total_power,
    intel,
    strength,
    speed,
    power,
    durability,
    combat
  ) {
    this.name = name;
    this.alignment = alignment;
    this.total_power = total_power;
    this.intel = intel;
    this.strength = strength;
    this.speed = speed;
    this.power = power;
    this.durability = durability;
    this.combat = combat;
    this.attack = intel + power + combat;
    this.health = durability + strength + speed;
  }
});
