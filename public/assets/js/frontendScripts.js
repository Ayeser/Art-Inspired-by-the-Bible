$(document).ready(function () {
    $("#searchButton").click(function () {
        event.preventDefault();
        console.log("searchArtwork function starts");
        var searchTerm = $("#searchArtwork").val().toLowerCase();
        console.log(searchTerm + " is the search term");
        $.ajax({
            url: "/api/Artwork/" + searchTerm,
            method: "GET"
        }).then(function (response) {
            $("#resultsHere").empty();
            $("#resultsHere").append(JSON.stringify(response));
        })
    })
});