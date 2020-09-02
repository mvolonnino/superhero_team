$(document).ready(() => {
  $("#searchBtn").on("click", (event) => {
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
    console.log("superFinal: ", superFinal);
    getSuperHero(superFinal);

    function getSuperHero(superFinal) {
      var baseUrl = "http://localhost:8080/api/hero/";

      $.ajax({
        url: baseUrl + superFinal,
        method: "POST",
      }).then(function (err, res) {
        if (err) throw err;
        console.log("res, ", res);
      });
    }

    $("#addHero").on("click", () =>{
      
    })
    function renderHero() {
      
    }
  });
});
