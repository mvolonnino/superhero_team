$(document).ready(() => {
  //make a call to our api-routes to search our heros database and return the data for ALL heroes
  var baseUrl = "http://localhost:8080/api/hero_data";
  $.get(baseUrl).then((response) => {
    // console.log("All our heroes: ", response);
    // console.log("Hero array length: ", response.length);

    var newRow = $("#rowWrapper");

    for (var i = 0; i < response.length; i++) {
      var newCol = $("<div class='col mt-4'>");
      var heroCard = $("<div class='card'>");
      var heroImg = $(
        "<img src='' alt='' class='card-img-top img-thumbnail' id='hero_img'>"
      );
      var heroBody = $("<div id='card_body' class='card-body'>");
      var heroName = $("<h5 id='hero_name'class='card-title'>");
      var heroTotalPower = $("<p id='heroTotalPower' class = 'card-text'>");
      var heroAlignment = $("<p id='heroAlignment' class = 'card-text'>");
      var heroInt = $("<p id='heroInt'class='card-text' >");
      var heroStrength = $("<p id='heroStrength' class='card-text'>");
      var heroSpeed = $("<p id='heroSpeed' class='card-text'>");
      var heroDurability = $("<p id='heroDurability' class='card-text'>");
      var heroPower = $("<p id='heroPower' class='card-text'>");
      var heroCombat = $("<p id='heroCombat' class='card-text'>");
      var lineBreak = $("<hr>");

      var fightBtn = $("<button class='btn btn-danger fightBtn'>").text(
        "Fight!"
      );
      fightBtn.attr("data-id", i);

      heroCard.append(heroImg);
      heroImg
        .attr("src", response[i].img_url)
        .attr("alt", "Image of " + response[i].name);

      heroName.text(response[i].name);
      heroBody.append(heroName);
      heroBody.append(lineBreak);

      heroAlignment.text("Alignment: " + response[i].alignment);
      heroBody.append(heroAlignment);

      var health =
        response[i].strength + response[i].speed + response[i].durability;
      var attack = response[i].intel + response[i].power + response[i].combat;
      heroTotalPower.text("Total Power: " + (health + attack));
      heroBody.append(heroTotalPower);

      heroInt.text("Intelligence: " + response[i].intel);
      heroBody.append(heroInt);

      heroStrength.text("Strength: " + response[i].strength);
      heroBody.append(heroStrength);

      heroSpeed.text("Speed: " + response[i].speed);
      heroBody.append(heroSpeed);

      heroDurability.text("Durability: " + response[i].durability);
      heroBody.append(heroDurability);

      heroPower.text("Power: " + response[i].power);
      heroBody.append(heroPower);

      heroCombat.text("Combat: " + response[i].combat);
      heroBody.append(heroCombat);

      heroBody.append(fightBtn);

      heroCard.append(heroBody);
      newCol.append(heroCard);
      newRow.append(newCol);
    }
  });

  var baseUrl = "http://localhost:8080/api/villain_data";
  $.get(baseUrl).then((response) => {
    // console.log("All our heroes: ", response);
    // console.log("Hero array length: ", response.length);
    console.log("villain: ", response);
    var villainHTML = response[0].name;
    $(".villain").text(villainHTML);

    var villainCard = $("#villainCard");

    for (var i = 0; i < response.length; i++) {
      var newCol = $("<div class='col mt-4'>");
      var heroCard = $("<div class='card'>");
      var heroImg = $(
        "<img src='' alt='' class='card-img-top img-thumbnail' id='villain_img'>"
      );
      var heroBody = $("<div id='card_body' class='card-body'>");
      var heroName = $("<h5 id='villain_name'class='card-title'>");
      var heroTotalPower = $("<p id='villainTotalPower' class = 'card-text'>");
      var heroAlignment = $("<p id='villainAlignment' class = 'card-text'>");
      var heroInt = $("<p id='villainIntel'class='card-text' >");
      var heroStrength = $("<p id='villainStrength' class='card-text'>");
      var heroSpeed = $("<p id='villainSpeed' class='card-text'>");
      var heroDurability = $("<p id='villainDurability' class='card-text'>");
      var heroPower = $("<p id='villainPower' class='card-text'>");
      var heroCombat = $("<p id='villainCombat' class='card-text'>");
      var lineBreak = $("<hr>");

      heroCard.append(heroImg);
      heroImg
        .attr("src", response[i].img_url)
        .attr("alt", "Image of " + response[i].name);

      heroName.text(response[i].name);
      heroBody.append(heroName);
      heroBody.append(lineBreak);

      heroAlignment.text("Alignment: " + response[i].alignment);
      heroBody.append(heroAlignment);

      var health =
        response[i].strength + response[i].speed + response[i].durability;
      var attack = response[i].intel + response[i].power + response[i].combat;
      heroTotalPower.text("Total Power: " + (health + attack));
      heroBody.append(heroTotalPower);

      heroInt.text("Intelligence: " + response[i].intel);
      heroBody.append(heroInt);

      heroStrength.text("Strength: " + response[i].strength);
      heroBody.append(heroStrength);

      heroSpeed.text("Speed: " + response[i].speed);
      heroBody.append(heroSpeed);

      heroDurability.text("Durability: " + response[i].durability);
      heroBody.append(heroDurability);

      heroPower.text("Power: " + response[i].power);
      heroBody.append(heroPower);

      heroCombat.text("Combat: " + response[i].combat);
      heroBody.append(heroCombat);

      //   heroBody.append(fightBtn);

      heroCard.append(heroBody);
      newCol.append(heroCard);
      villainCard.append(newCol);
    }
  });
});
