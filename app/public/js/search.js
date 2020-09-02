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
      method: "GET",
    }).then(function (results) {
      // console.log("ADDING NEW HERO");
      console.log(" HERO RESULTS: ", results);
    });


    // $.ajax({
    //   url: baseUrl + superFinal,
    //   method: "GET",
    // }).then(function (data) {
    //   //check if a hero is already in our database, if so
    //   //pull that hero from our database and desiplay to user
    //   if(data === null) { 
    //     console.log("No record, create new HERO")
    //     $.ajax({
    //       url: baseUrl + superFinal,
    //       method: "POST",
    //     }).then(function (results) {
    //       console.log("ADDING NEW HERO");
    //       console.log("NEW HERO RESULTS: ", results);
    //     });
    //   }
    //   //If our hero is not in our database yet, add them and then
    //   //display their data to the user
    //   else{
    //     console.log("Our backend data: ", data);
    //   }

    // });
  }
});
