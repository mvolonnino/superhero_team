$(document).ready(() => {
  // $("#rowWrapper").show();
  $("#battlegroundRow").hide();
  $("#battleground").hide();
  $(document).on("click", ".fightBtn", function () {
    event.preventDefault();
    // var dataId = $(this).attr("data-id");
    var img = $(this).parent().siblings("#hero_img").attr("src");
    var name = $(this).siblings("#hero_name").text();
    var intel = $(this).siblings("#heroInt").text().split(" ")[1];
    var strength = $(this).siblings("#heroStrength").text().split(" ")[1];
    var speed = $(this).siblings("#heroSpeed").text().split(" ")[1];
    var durability = $(this).siblings("#heroDurability").text().split(" ")[1];
    var power = $(this).siblings("#heroPower").text().split(" ")[1];
    var combat = $(this).siblings("#heroCombat").text().split(" ")[1];
    var alignment = $(this).siblings("#heroAlignment").text().split(" ")[1];
    var total_power = $(this).siblings("#heroTotalPower").text().split(" ")[2];

    // create the hero character model
    const hero = new Character(
      img,
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

    confirm(`Are you sure you want to use ${name} to fight?`);
    if (confirm) {
      console.log(`${name} will be used to fight`);
      startFight(hero);
    } else {
      console.log(`${name} will not be used to fight`);
    }
  });

  function startFight(hero) {
    $("#rowWrapper").hide();
    $("#universeMessage").hide();
    $("#battleground").show();
    $("#battlegroundRow").show();
    // window.location.href = "/battlegrounds";
    // grab villain information that was randomized
    var img = $("#villain_img").attr("src");
    console.log("img: ", img);
    var name = $("#villain_name").text();
    var alignment = $("#villainAlignment").text().split(" ")[1];
    var total_power = $("#villainTotalPower").text().split(" ")[2];
    var intel = $("#villainIntel").text().split(" ")[1];
    var strength = $("#villainStrength").text().split(" ")[1];
    var speed = $("#villainSpeed").text().split(" ")[1];
    var durability = $("#villainDurability").text().split(" ")[1];
    var power = $("#villainPower").text().split(" ")[1];
    var combat = $("#villainCombat").text().split(" ")[1];
    // create the villain character model
    const villain = new Character(
      img,
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
    console.log("Hero Character", hero);
    console.log("Villain Character: ", villain);

    $("#hero_img").attr("src", hero.img);
    $("#hero_name").text(hero.name);
    $("#hero_alignment").text(`Alignment: ${hero.alignment}`);
    $("#hero_total_power").text(`Total Power: ${hero.total_power}`);
    $("#hero_attack").text(`Attack: ${hero.attack}`);
    $("#hero_health").text(`Healh: ${hero.health}`);

    $("#villainImg").attr("src", villain.img);
    $("#villainName").text(villain.name);
    $("#villain_alignment").text(`Alignment: ${villain.alignment}`);
    $("#villain_total_power").text(`Total Power: ${villain.total_power}`);
    $("#villain_attack").text(`Attack: ${villain.attack}`);
    $("#villain_health").text(`Healh: ${villain.health}`);
    // $("#hero_intel").text(hero.intel);
    // $("#hero_strength").text(hero.strength);
    // $("#hero_speed").text(hero.speed);
    // $("#hero_durability").text(hero.durability);
    // $("#hero_power").text(hero.power);
    // $("#hero_combat").text(hero.combat);
  }

  // Character Models
  function Character(
    img,
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
    this.img = img;
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
