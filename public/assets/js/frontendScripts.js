$(document).ready(function () {

    $(document).on("submit", "#artworkForm", handleArtworkFormSubmit);
    function handleArtworkFormSubmit(event) {
        event.preventDefault();
        var searchTerms = $("#searchArtwork").val().toLowerCase().split(" ");
        console.log("searchTerm 1 is: " + searchTerms[0]);
        console.log("searchTerm 2 is: " + searchTerms[1]);
        $("#resultsHere").empty();

        //if search term recognized as Bible book...
        if (searchTerm1 == "genesis" || searchTerm1 == "exodus" || searchTerm1 == "leviticus" || searchTerm1 == "numbers" || searchTerm1 == "deuteronomy" || searchTerm1 == "joshua" || searchTerm1 == "judges" || searchTerm1 == "ruth" || searchTerm1 == "1" || searchTerm1 == "2" || searchTerm1 == "ezra" || searchTerm1 == "nehemiah" || searchTerm1 == "esther" || searchTerm1 == "job" || searchTerm1 == "psalms" || searchTerm1 == "proverbs" || searchTerm1 == "ecclesiastes" || searchTerm1 == "song" || searchTerm1 == "isaiah" || searchTerm1 == "jeremiah" || searchTerm1 == "lamentations" || searchTerm1 == "ezekiel" || searchTerm1 == "daniel" || searchTerm1 == "hosea" || searchTerm1 == "joel" || searchTerm1 == "amos" || searchTerm1 == "obadiah" || searchTerm1 == "jonah" || searchTerm1 == "micah" || searchTerm1 == "nahum" || searchTerm1 == "habakkuk" || searchTerm1 == "zephaniah" || searchTerm1 == "haggai" || searchTerm1 == "zechariah" || searchTerm1 == "malachi" || searchTerm1 == "matthew" || searchTerm1 == "mark" || searchTerm1 == "luke" || searchTerm1 == "john" || searchTerm1 == "acts" || searchTerm1 == "romans" || searchTerm1 == "galatians" || searchTerm1 == "ephesians" || searchTerm1 == "philippians" || searchTerm1 == "colossians" || searchTerm1 == "titus" || searchTerm1 == "philemon" || searchTerm1 == "hebrews" || searchTerm1 == "james" || searchTerm1 == "jude" || searchTerm1 == "revelation") {
            $.get("api/scriptures/" + searchTerm1 + "/" + searchTerm2, function(data) {
                $("#scriptureHere").append(JSON.parse(data));
            })
            $.get("api/artPieces/" + searchTerm1 + "/" + searchTerm2, function(data) {
                const artToAdd = [];
                for (let i = 0; i< data.length;i++) {
                    artToAdd.push(createNewPiece(data[i]));
                }
                $("#resultsHere").append("<h1>Pictures for this chapter include: </h1><br /><br />");
                $("#resultsHere").append(artToAdd);
            })
    
            function createNewPiece(piece) {
                return ("<div><p>Title: " + piece.title + ", Artist: " + piece.artist + ", verse: " + piece.verse + "<br /><img src='" + piece.picture + "'></div>");
            }
    
            $.get("api/videos/" + searchTerm1 + "/" + searchTerm2, function(data) {
                const videosToAdd = [];
                for (let i = 0; i< data.length;i++) {
                    videosToAdd.push(createNewVideo(data[i]));
                }
                $("#resultsHere").append("<h1>Videos for this chapter include: </h1><br /><br />");
                $("#resultsHere").append(artToAdd);
            })
    
            function createNewVideo(piece) {
                return ("<div><p>Title: " + piece.title + ", Artist: " + piece.artist + ", verse: " + piece.verse + "<br /><img src='" + piece.picture + "'></div>");
            }
        } else {
            // This next chunk is if the first search word was not a Bible book
            $.get("api/artistArtwork/" + searchTerm1, function(data) {
                const artToAdd = [];
                for (let i = 0; i< data.length;i++) {
                    artToAdd.push(createNewPiece(data[i]));
                }
                $("#resultsHere").append("<h1>Pictures for this artist include: </h1><br /><br />");
                $("#resultsHere").append(artToAdd);
            })
    
            function createNewPiece(piece) {
                return ("<div><p>Title: " + piece.title + ", Artist: " + piece.artist + ", book: " + piece.book + ", verse: " + piece.verse + "<br /><img src='" + piece.picture + "'></div>");
            }
    
            $.get("api/artistVideos/" + searchTerm1, function(data) {
                const videosToAdd = [];
                for (let i = 0; i< data.length;i++) {
                    videosToAdd.push(createNewVideo(data[i]));
                }
                $("#resultsHere").append("<h1>Videos for this artist include: </h1><br /><br />");
                $("#resultsHere").append(artToAdd);
            })
    
            function createNewVideo(piece) {
                return ("<div><p>Title: " + piece.title + ", Artist: " + piece.artist + ", book: " + piece.book + ", verse: " + piece.verse + "<br /><img src='" + piece.picture + "'></div>");
            }
        };
        
    

    //Menu bar handling
    $("#OT").on("click", makeOldTestamentNav);
    function makeOldTestamentNav() {
        $("#nav2").empty();
        $("#nav3").empty();
        $("#nav4").empty();
        $("#nav2").html('<nav class="navbar navbar-primary bg-primary justify-content-between" id="booksButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="PentateuchNav">Pentateuch</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="HistoricalBooksNav">Historical Books</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="WisdomNav">Wisdom</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="MajorProphetsNav">Major Prophets</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="MinorProphetsNav">Minor Prophets</button></nav>');
    };
    $(document).on("click", "#NT", makeNewTestamentNav);
    function makeNewTestamentNav() {
        $("#nav2").empty();
        $("#nav3").empty();
        $("#nav4").empty();
        $("#nav2").html('<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="GospelsNav">Gospels/Acts</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="PaulineNav">Pauline Epistles</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="EpistlesNav">General Epistles</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="RevelationNav">Revelation</button></nav>');
    };
    $("#PentateuchNav").on("click", "#PentateuchNav", chosePenteteuch);
        function chosePenteteuch() {
            $("#nav3").empty();
            $("#nav4").empty();
            $("#nav3").html('<nav class="navbar navbar-primary bg-primary justify-content-between" id="booksButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Genesis">Genesis</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Exodus">Exodus</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Leviticus">Leviticus</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Numbers">Numbers</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Deuteronomy">Deuteronomy</button></nav>');
        };    
            $("#HistoricalBooksNav").on("click", "#HistoricalBooksNav", choseHistoricalBooks);
            function choseHistoricalBooks() {
                $("#nav3").empty();
                $("#nav4").empty();
                $("#nav3").html('here would go buttons for Joshua, Judges, Ruth, 1 Samuel, 2 Samuel, 1 Kings, 2 Kings, 1 Chronicles, 2 Chronicles, Ezra, Nehemiah, Esther');
            };
        }
    });