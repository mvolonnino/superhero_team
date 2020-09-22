$(document).ready(() => {
  // $("#rowWrapper").show();
  $("#battlegroundRow").hide();
  $("#battleground").hide();

  $(document).on("click", ".fightBtn", function () {
    event.preventDefault();
    // var dataId = $(this).attr("data-id");
    var img = $(this).parent().siblings("#hero_img").attr("src");
    var name = $(this).siblings("#hero_name").text();
    console.log("name", name);
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

    var confirmFight = confirm(`Are you sure you want to use ${name} to fight?`);
    if (confirmFight) {
      console.log("confirm: ", confirmFight);
      console.log(`${name} will be used to fight`);
      startFight(hero);
    } else {
      console.log("confirm: ", confirmFight);
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

    // game logic
    // display hero health
    $(".hideMe").hide();
    // attack button click will lower villain health
    $("#attack-button").on("click", () => {
      attack(hero, villain);
    });
    $("#hero-name").text(hero.name);
    $("#hero-health").text(hero.health).attr("style", "color:green");
    // display villain health
    $("#villain-name").text(villain.name);
    $("#villain-health").text(villain.health).attr("style", "color:green");
  }
  function attack(hero, villain) {
    var hero_attack = Math.floor((Math.random() * hero.attack) / 2 + 5);
    $("#attack-button").hide();
    villain.health -= hero_attack;
    if (villain.health < 75) {
      $("#villain-health").attr("style", "color:orange");
    }
    $("#villain-health").text(villain.health);

    if (hero_attack === 0 && villain.health > 0) {
      $("#gameMessageHero").text(`${hero.name} missed! No damage dealt`);
    } else if (hero_attack >= hero.attack / 2 && villain.health <= 0) {
      $("#gameMessageHero").text(
        `${hero.name} hit for ${hero_attack}, a critical hit and IS VICTORIOUS, YOU HAVE SAVED THE UNIVERSE!`
      );
      $("#villain-health").attr("style", "color:red");
      $("#villain-health").text("0");
      $(".hideMe").show();

      return;
    } else if (hero_attack >= hero.attack / 2 && villain.health > 0) {
      $("#gameMessageHero").text(`${hero.name} hit for ${hero_attack}, a critical hit`);
    } else if (hero_attack < hero.attack / 2 && villain.health > 0) {
      $("#gameMessageHero").text(`${hero.name} hit for ${hero_attack} damage`);
    } else if (hero_attack < hero.attack / 2 && villain.health <= 0) {
      $("#villain-health").attr("style", "color:red");
      $("#villain-health").text("0");
      $("#gameMessageHero").text(
        `${hero.name} hit for ${hero_attack} damage and IS VICTORIOUS, YOU HAVE SAVED THE UNIVERSE!`
      );
      $("#attack-button").hide();
      $(".hideMe").show();

      return;
    }

    console.log(hero_attack);

    setTimeout(() => {
      var villain_attack = Math.floor((Math.random() * villain.attack) / 2 + 5);
      hero.health -= villain_attack;
      if (hero.health < 75) {
        $("#hero-health").attr("style", "color:orange");
      }
      $("#hero-health").text(hero.health);

      if (villain_attack === 0 && hero.health > 0) {
        $("#gameMessageHero").text(`${villain.name} missed! No damage dealt`);
      } else if (villain_attack >= villain.attack / 2 && hero.health <= 0) {
        $("#hero-health").attr("style", "color:red");
        $("#hero-health").text("0");
        $("#gameMessageHero").text(
          `${villain.name} hit for ${villain_attack}, a critical hit and IS VICTORIOUS, YOU HAVE SAVED THE UNIVERSE!`
        );
        $(".hideMe").show();

        return;
      } else if (villain_attack >= villain.attack / 2 && hero.health > 0) {
        $("#gameMessageHero").text(`${villain.name} hit for ${villain_attack}, a critical hit`);
      } else if (villain_attack < villain.attack / 2 && hero.health > 0) {
        $("#gameMessageHero").text(`${villain.name} hit for ${villain_attack} damage`);
      } else if (villain_attack < villain.attack / 2 && hero.health <= 0) {
        $("#hero-health").attr("style", "color:red");
        $("#hero-health").text("0");
        $("#gameMessageHero").text(
          `${villain.name} hit for ${villain_attack} damage and IS VICTORIOUS! YOU HAVE FAILED TO SAVE THE UNIVERSE!`
        );
        $("#attack-button").hide();
        $(".hideMe").show();

        return;
      }

      console.log("villain attack: ", villain_attack);

      $("#attack-button").show();
    }, 2000);
  }

  // Character Models
  function Character(img, name, alignment, total_power, intel, strength, speed, power, durability, combat) {
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
    this.attack = Math.floor(intel * 1.75 + power + combat * 1.3);
    this.health = Math.floor(durability * 2.75 + speed * 1.25 + strength);
  }
});
