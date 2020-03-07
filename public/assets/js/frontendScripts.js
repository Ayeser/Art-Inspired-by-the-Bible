$(document).ready(function () {
    $("#searchButton").click(function () {
        event.preventDefault();
        console.log("searchArtwork function starts");
        var searchTerm = $("#searchArtwork").val().toLowerCase();
        var firstWord = searchTerm.substr(0, searchTerm.indexOf(" "));
        console.log("The first word of search is " + firstWord);
        $.ajax({
            url: "https://https://glacial-falls-40496.herokuapp.com/api/Artwork/:" + searchTerm,
            method: "GET"
        }).then(function (response) {
            $("#resultsHere").empty();
            $("#resultsHere").append(JSON.stringify(response));
        })
    })
});