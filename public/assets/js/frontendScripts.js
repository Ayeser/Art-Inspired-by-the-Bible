$(document).ready(function () {
    $("#searchButton").click(function () {
        event.preventDefault();
        console.log("searchArtwork function starts");
        var searchTerm = $("#searchArtwork").val().toLowerCase();
        var firstWord = searchTerm.substr(0, searchTerm.indexOf(" "));
        console.log("The first word of search is " + firstWord);
        $.ajax({
            url: "/api/Artwork/" + searchTerm,
            method: "GET"
        }).then(function (response) {
            $("#resultsHere").empty();
            $("#resultsHere").append(JSON.stringify(response));
        })
    })
});