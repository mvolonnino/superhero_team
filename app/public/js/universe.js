$(document).ready(() => {
    //make a call to our api-routes to search our heros database and return the data for ALL heroes
    var baseUrl = "http://localhost:8080/api/hero_data";
    $.get(baseUrl)
        .then(response => {
            console.log("All our heroes: ", response);
            console.log("Hero array length: ", response.length);
            var newRow = $(".firstRow");
            for(var i = 0; i < response.length; i++){
               newRow.append($("<div class='card heroCard'>").text(response[i].name));
            }
    })
});