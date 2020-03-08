$(document).ready(function () {
    $(document).on("submit", "#artworkForm", handleArtworkFormSubmit);
    var searchInput = $("#searchArtwork").val();
    var searchURL = "api/Artwork/" + searchInput;
    var resultContainer = $("#resultsHere");
    function handleArtworkFormSubmit(event) {
        event.preventDefault();
        console.log("before get call :" + searchInput)
        $.get(searchURL, function(data) {
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