$(document).ready(function () {
    $(document).on("submit", "#artworkForm", handleArtworkFormSubmit);
    var searchInput = $("#searchArtwork");
    var resultContainer = $("#resultsHere");
    function handleArtworkFormSubmit(event) {
        event.preventDefault();
        $.get("api/Artwork" + searchInput, function(data) {
            console.log("Artwork: " + data);
            resultContainer.empty();
            const artToAdd = [];
            for (let i = 0; i< data.length;i++) {
                artToAdd.push(createNewPiece(data[i]));
            }
            resultContainer.append(artToAdd)
        })

        function createNewPiece(piece) {
            return ("<div>" + piece + "</div>");
        }
    }
});