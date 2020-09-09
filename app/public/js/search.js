$(document).ready(() => {
  recentSearchArr = [];
  // display email on top of page
  $.get("/api/user_data").then((data) => {
    console.log("/user_data");
    $(".member-name").text(data.email);
  });

  function recentSearches(supeName) {
    for (var i = 0; i < recentSearchArr.length; i++) {
      var pTag = $("<li>");
      pTag.addClass("card-text");
      pTag.text(recentSearchArr[i].join(" "));
      console.log("recentSearchArr[i]: ", recentSearchArr[i]);
      if (recentSearchArr[i] === supeName) {
        $("#recentSearches").prepend(pTag);
      }
    }
  }

  $("#searchBtn").on("click", (event) => {
    event.preventDefault();
    $("#addedHero").remove();
    var supeName = $("#superheroSearch").val().trim().toLowerCase().split(" ");
    recentSearchArr.push(supeName);
    console.log("recentSearchArr: ", recentSearchArr);
    // console.log("supeName:", supeName);
    var superFinal = "";

    if (supeName.length === 1) {
      superFinal = supeName;
    } else if (supeName.length === 2) {
      superFinal += supeName[0] + "%20" + supeName[1];
    } else if (supeName.length === 3) {
      superFinal += supeName[0] + "%20" + supeName[1] + "%20" + supeName[2];
    }
    console.log("superFinal: ", superFinal);
    getSuperHero(superFinal);

    function getSuperHero(superFinal) {
      var baseUrl = "/api/hero/";

      $.ajax({
        url: baseUrl + superFinal,
        method: "GET",
      }).then(function (results) {
        console.log("HERO RESULTS: ", results);
        if (results.type === "error") {
          console.log("Hero does not exist in this universe's source");
          $("#heroResults").hide();
          alert(
            "This hero may not exist in the multiverse.... Check spelling or search again!"
          );
        } else {
          renderHero();
          $("#heroResults").show();
          recentSearches(supeName);
        }
        function renderHero() {
          // grabbing informatoin based on search results
          let hero_name = results[0].name;
          let alignment = results[0].biography.alignment;
          let publisher = results[0].biography.publisher;
          let race = results[0].appearance.race;
          let occupation = results[0].work.occupation;
          let gender = results[0].appearance.gender;
          let powerstats = results[0].powerstats;
          let stats = powerstats;
          let values = Object.values(stats);
          var total_power = 0;
          for (var i = 0; i < values.length; i++) {
            total_power += parseInt(values[i]);
          }
          let imgURL = results[0].image.url;
          let imgTag = $("#hero_img");
          imgTag.attr("src", imgURL);
          imgTag.attr("alt", "Image of " + hero_name);
          $("#hero_name").text(hero_name);
          $("#hero_race").text("Race: " + race);
          $("#hero_alignment").text("Alignment: " + alignment);
          $("#hero_occupation").text("Occupation: " + occupation);
          $("#hero_publisher").text("Publisher: " + publisher);
          $("#hero_total_power").text("Power Level: " + total_power);
          let addHero = $("#addHero");
          addHero.addClass("d-block");
        }
      });
    }
  });
  // post route to post the choosen hero our heros table
  $("#addHero").on("click", (event) => {
    event.preventDefault();
    $("#addedHero").remove();
    var supeName = $("#superheroSearch").val().trim().toLowerCase().split(" ");
    console.log("supeName:", supeName);
    var superFinal = "";

    if (supeName.length === 1) {
      superFinal = supeName;
    } else if (supeName.length === 2) {
      superFinal += supeName[0] + "%20" + supeName[1];
    } else if (supeName.length === 3) {
      superFinal += supeName[0] + "%20" + supeName[1] + "%20" + supeName[2];
    }
    $.post("/api/hero/" + superFinal).then(function (response) {
      console.log("response: ", response);
      if (response.message === "Hero has been added to your universe!") {
        var addedHeroDiv = $("<div>");
        addedHeroDiv.attr("id", "addedHero");
        $("#heroResultsCol").append(addedHeroDiv);
        var addedHeroP = $("<p>");
        addedHeroP.text("Hero has been added to your universe!");
        addedHeroP.attr("style", "color:green");
        addedHeroDiv.append(addedHeroP);
      } else {
        var addedHeroDiv = $("<div>");
        addedHeroDiv.attr("id", "addedHero");
        $("#heroResultsCol").append(addedHeroDiv);
        var addedHeroP = $("<p>");
        addedHeroP.text("Hero already exists in your universe!");
        addedHeroP.attr("style", "color:red");
        addedHeroDiv.append(addedHeroP);
      }
    });
  });
});
