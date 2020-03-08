$(document).ready(function () {
    $("#searchButton").click(function () {
        event.preventDefault();
        var searchTerm = $("#searchArtwork").val().toLowerCase();
        console.log(searchTerm + " is the search term");
        $.ajax({
            url: "/api/Artwork/" + searchTerm,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            $("#resultsHere").empty();
            $("#resultsHere").append(JSON.stringify(response));
        })
    })
});