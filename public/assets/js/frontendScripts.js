$(document).ready(function () {
    $(document).on("submit", "#artworkForm", handleArtworkFormSubmit);
    var searchInput = $("#searchArtwork")
    function handleArtworkFormSubmit(event) {
        event.preventDefault();
        if (!searchInput.val().trim().trim()) {
            return;
        }
            $("#resultsHere").empty();
            $("#resultsHere").append(Artwork.findAll({
                where: {
                    book: searchInput
                }
            }));
        }
    })