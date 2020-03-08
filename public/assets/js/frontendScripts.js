$(document).ready(function () {
    $(document).on("submit", "#artworkForm", handleArtworkFormSubmit);

    function handleArtworkFormSubmit(event) {
        event.preventDefault();
        if (!searchInput.val().trim().trim()) {
            return;
        }
        $.get("api/Artwork", function(data) {
            console.log(response);
            $("#resultsHere").empty();
            $("#resultsHere").append(JSON.stringify(response));
        })
    }
});