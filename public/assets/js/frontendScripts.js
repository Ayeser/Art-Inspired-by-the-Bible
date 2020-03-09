$(document).ready(function () {
    $(document).on("submit", "#artworkForm", handleArtworkFormSubmit);
    var resultContainer = $("#resultsHere");
    function handleArtworkFormSubmit(event) {
        event.preventDefault();
        console.log("before get call: " + $("#searchArtwork").val().toLowerCase())
        $.get("api/Artwork/" + $("#searchArtwork").val().toLowerCase(), function(data) {
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