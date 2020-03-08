$(document).ready(function () {
    $(document).on("submit", "#artworkForm", handleArtworkFormSubmit);
    var searchInput = $("#searchArtwork")
    function handleArtworkFormSubmit(event) {
        event.preventDefault();
        if (!searchInput.val().trim().trim()) {
            return;
        }
        $.get("api/Artwork/" + searchInput, function(response) {
            console.log(response);
            $("#resultsHere").empty();
            $("#resultsHere").append(JSON.stringify(response));
        })
    }
});