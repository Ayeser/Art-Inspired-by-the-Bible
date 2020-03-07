$(document).ready(function() {
    $("#searchButton").click(function(){
        console.log("searchArtwork function starts");
    var searchTerm = $("#searchArtwork").val().toLowerCase();
        var firstWord = codeLine.substr(0, codeLine.indexOf(" "));
    console.log("The first word of search is " + firstWord);
    })

});

    // $.ajax({
    //     url: "https://https://glacial-falls-40496.herokuapp.com/api/Artwork/:" + searchTerm,
    //     method: "GET"
    // }).then(function(response) {
    //     $("#resultsHere").empty();
    //     $("#resultsHere").append(JSON.stringify(response));
    // })
// });