$(document).ready(() => {
  //make a call to our api-routes to search our heros database and return the data for ALL heroes
  var baseUrl = "http://localhost:8080/api/hero_data";
  $.get(baseUrl).then((response) => {
    console.log("All our heroes: ", response);
    console.log("Hero array length: ", response.length);

    var newRow = $("#rowWrapper");

    for (var i = 0; i < response.length; i++) {
      var newCol = $("<div class='col mt-4'>");
      var heroCard = $("<div class='card'>");
      var heroImg = $(
        "<img src='' alt='' class='card-img-top img-thumbnail' id='hero_img'>"
      );
      var heroBody = $("<div id='card_body' class='card-body'>");
      var heroName = $("<h5 id='hero_name'class='card-title'>");
      var heroInt = $("<p id='heroInt'class='card-text' >");
      var heroStrength = $("<p id='heroStrngth' class='card-text'>");
      var heroSpeed = $("<p id='heroSpeed' class='card-text'>");
      var heroDurability = $("<p id='heroDurability' class='card-text'>");
      var heroPower = $("<p id='heroPower' class='card-text'>");
      var heroCombat = $("<p id='heroCombat' class='card-text'>");
      var heroHealth=$("<p id='heroHealth' class = 'card-text'");
      var heroAttack=$("<p id='heroAttack' class = 'card-text'");
      var heroTotalPower=$("<p id='heroTotalPower' class = 'card-text'"); 
      var fightBtn = $("<button class='btn btn-secondary fightBtn'>").text(
        "Fight!"
      );
      fightBtn.attr("data-id", i);

      heroCard.append(heroImg);
      heroImg
        .attr("src", response[i].img_url)
        .attr("alt", "Image of " + response[i].name);

      heroName.text(response[i].name);
      heroBody.append(heroName);

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
//   $(document).on("click", ".fightBtn", function () {
//     event.preventDefault();
//     var dataId = $(this).attr("data-id");
//     console.log("dataId: ", dataId);
//   });
});
