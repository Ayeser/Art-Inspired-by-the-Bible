function searchArtwork() {
    var searchTerm = $("#searchArtwork").val();
    $.ajax({
        url: "https://https://glacial-falls-40496.herokuapp.com/api/Artwork/:" + searchTerm,
        method: "GET"
    }).then(function(response) {
        $("#resultsHere").empty();
        $("#resultsHere").append(JSON.stringify(response));
    })
};
