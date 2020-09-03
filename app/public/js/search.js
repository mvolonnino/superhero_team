$(document).ready(() => {
  // display email on top of page
  $.get("/api/user_data").then((data) => {
    console.log("/user_data");
    $(".member-name").text(data.email);
  });

  $("#searchBtn").on("click", (event) => {
    event.preventDefault();
    var supeName = $("#superheroSearch").val().trim().toLowerCase().split(" ");
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
      var baseUrl = "http://localhost:8080/api/hero/";

      $.ajax({
        url: baseUrl + superFinal,
        method: "GET",
      }).then(function (results) {
        console.log("HERO RESULTS: ", results);
        if (results.type === "error") {
          console.log("Hero does not exist in this univers's source");
        } else {
          renderHero();
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
    var baseUrl = "http://localhost:8080/api/hero/";

    // // $.ajax({
    // //   url: baseUrl + superFinal,
    // //   method: "GET",
    // // })
    // .then(function (results) {
    // console.log("results: ", results);
    $.post("/api/hero/" + superFinal).then(function (response) {
      console.log("response: ", response);
      let addedHero = $("<div>");
    });
    // });
  });
});
