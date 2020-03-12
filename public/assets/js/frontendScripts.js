$(document).ready(function () {
    $(document).on("submit", "#artworkForm", handleArtworkFormSubmit);
    var resultContainer = $("#resultsHere");
    function handleArtworkFormSubmit(event) {
        event.preventDefault();
        searchTerms = $("#searchArtwork").val().toLowerCase().split(" ");
        console.log("searchTerm 1 is: " + searchTerms[0]);
        console.log("searchTerm 2 is: " + searchTerms[1]);
        $("#resultsHere").empty();

        //if search term recognized as Bible book...
        if (searchTerms[0] == "genesis" || searchTerms[0] == "exodus" || searchTerms[0] == "leviticus" || searchTerms[0] == "numbers" || searchTerms[0] == "deuteronomy" || searchTerms[0] == "joshua" || searchTerms[0] == "judges" || searchTerms[0] == "ruth" || searchTerms[0] == "1" || searchTerms[0] == "2" || searchTerms[0] == "ezra" || searchTerms[0] == "nehemiah" || searchTerms[0] == "esther" || searchTerms[0] == "job" || searchTerms[0] == "psalms" || searchTerms[0] == "proverbs" || searchTerms[0] == "ecclesiastes" || searchTerms[0] == "song" || searchTerms[0] == "isaiah" || searchTerms[0] == "jeremiah" || searchTerms[0] == "lamentations" || searchTerms[0] == "ezekiel" || searchTerms[0] == "daniel" || searchTerms[0] == "hosea" || searchTerms[0] == "joel" || searchTerms[0] == "amos" || searchTerms[0] == "obadiah" || searchTerms[0] == "jonah" || searchTerms[0] == "micah" || searchTerms[0] == "nahum" || searchTerms[0] == "habakkuk" || searchTerms[0] == "zephaniah" || searchTerms[0] == "haggai" || searchTerms[0] == "zechariah" || searchTerms[0] == "malachi" || searchTerms[0] == "matthew" || searchTerms[0] == "mark" || searchTerms[0] == "luke" || searchTerms[0] == "john" || searchTerms[0] == "acts" || searchTerms[0] == "romans" || searchTerms[0] == "galatians" || searchTerms[0] == "ephesians" || searchTerms[0] == "philippians" || searchTerms[0] == "colossians" || searchTerms[0] == "titus" || searchTerms[0] == "philemon" || searchTerms[0] == "hebrews" || searchTerms[0] == "james" || searchTerms[0] == "jude" || searchTerms[0] == "revelation") {
            $.get("api/scriptures/" + searchTerms[0] + "/" + searchTerms[1], function (data) {
                $("#scriptureHere").append(data.book + " " + data.chapter + " " + data.passage);
            })
            $.get("api/artPieces/" + searchTerms[0] + "/" + searchTerms[1], function (data) {
                const artToAdd = [];
                for (let i = 0; i < data.length; i++) {
                    artToAdd.push(createNewPiece(data[i]));
                }
                $("#resultsHere").append("<h1>Art pieces for this chapter include: </h1><br /><br />");
                $("#resultsHere").append(artToAdd);
            });

            $.get("api/videos/" + searchTerms[0] + "/" + searchTerms[1], function (data) {
                const videosToAdd = [];
                for (let i = 0; i < data.length; i++) {
                    videosToAdd.push(createNewVideo(data[i]));
                };
                if (videosToAdd === []) {
                } else {
                    $("#resultsHere").append("<h1>Videos pieces for this chapter include: </h1><br /><br />");
                    $("#resultsHere").append(videosToAdd);
                }
            });

            function createNewPiece(piece) {
                return ("<div><p>Title: " + piece.title + ", Artist: " + piece.artist + ", verse: " + piece.verse + "<br /><img src='" + piece.picture + "'></div>");
            }

            function createNewVideo(piece) {
                return ("<div><p>Title: " + piece.title + ", Artist: " + piece.artist + ", verse: " + piece.verse + "<br /><img src='" + piece.videoEmbed + "'></div>");
            }
        } else {
            // This next chunk is if the first search word was not a Bible book
            $.get("api/artistArtwork/" + searchTerms[0], function (data) {
                const artToAdd = [];
                for (let i = 0; i < data.length; i++) {
                    artToAdd.push(createNewPiece(data[i]));
                }
                $("#resultsHere").append("<h1>Art pieces for this artist include: </h1><br /><br />");
                $("#resultsHere").append(artToAdd);
            })

            function createNewPiece(piece) {
                return ("<div><p>Title: " + piece.title + ", Artist: " + piece.artist + ", book: " + piece.book + ", verse: " + piece.verse + "<br /><img src='" + piece.picture + "'></div>");
            }
            resultContainer.append(artToAdd)
        }
    }

//Menu bar handling
$("#OT").on("click", makeOldTestamentNav);
function makeOldTestamentNav() {
    event.preventDefault();
    $("#nav2").empty().hide(1000);
    $("#nav3").empty().hide(1000);
    $("#nav4").empty().hide(1000);
    $("#nav2").show(1000).append('<nav class="navbar navbar-primary bg-primary justify-content-between" id="booksButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="PentateuchNav">Pentateuch</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="HistoricalBooksNav">Historical Books</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="WisdomNav">Wisdom</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="MajorProphetsNav">Major Prophets</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="MinorProphetsNav">Minor Prophets</button></nav>');
};
$(document).on("click", "#NT", makeNewTestamentNav);
function makeNewTestamentNav() {
    event.preventDefault();
    $("#nav2").empty().hide(1000);
    $("#nav3").empty().hide(1000);
    $("#nav4").empty().hide(1000);
    $("#nav2").show(1000).append('<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="GospelsNav">Gospels/Acts</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="PaulineNav">Pauline Epistles</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="EpistlesNav">General Epistles</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="RevelationNav">Revelation</button></nav>');
};
$("#PentateuchNav").on("click", "#PentateuchNav", chosePenteteuch);
function chosePenteteuch() {
    event.preventDefault();
    $("#nav3").empty().hide(1000);
    $("#nav4").empty().hide(1000);
    $("#nav3").show(1000).append('<nav class="navbar navbar-primary bg-primary justify-content-between" id="booksButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Genesis">Genesis</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Exodus">Exodus</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Leviticus">Leviticus</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Numbers">Numbers</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Deuteronomy">Deuteronomy</button></nav>');
};
$("#HistoricalBooksNav").on("click", "#HistoricalBooksNav", choseHistoricalBooks);
function choseHistoricalBooks() {
    event.preventDefault();
    $("#nav3").empty().hide(1000);
    $("#nav4").empty().hide(1000);
    $("#nav3").show(1000).append('here would go buttons for Joshua, Judges, Ruth, 1 Samuel, 2 Samuel, 1 Kings, 2 Kings, 1 Chronicles, 2 Chronicles, Ezra, Nehemiah, Esther');
};
});