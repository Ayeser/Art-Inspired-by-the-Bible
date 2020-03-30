$(document).ready(function () {

    $("#scriptureHere").hide();
    $("#resultsHere").hide();
    //Menu bar handling
    $(document).on("click", "#OT", makeOldTestamentNav);
    function makeOldTestamentNav() {
        // event.preventDefault();
        $("#nav2").remove();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav1").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav2"><div id="booksButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="PentateuchNav">Pentateuch</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="HistoricalBooksNav">Historical Books</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="WisdomNav">Wisdom</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="MajorProphetsNav">Major Prophets</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="MinorProphetsNav">Minor Prophets</button></div></nav>');
        $(document).on("click", "#PentateuchNav", chosePenteteuch);
        $(document).on("click", "#HistoricalBooksNav", choseHistoricalBooks);
        $(document).on("click", "#WisdomBooksNav", choseWisdomBooks);
        $(document).on("click", "#MajorProphetsNav", choseMajorProphetsBooks);
        $(document).on("click", "#MinorProphetsNav", choseMinorProphetsBooks);
    };
    $(document).on("click", "#NT", makeNewTestamentNav);
    function makeNewTestamentNav() {
        // event.preventDefault();
        $("#nav2").remove();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav1").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav2"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="GospelsNav">Gospels/Acts</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="PaulineNav">Pauline Epistles</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="EpistlesNav">General Epistles</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="RevelationNav">Revelation</button></nav></nav>');
        $(document).on("click", "#GospelsNav", choseGospelsBooks);
        $(document).on("click", "#PaulineEpistlesNav", chosePaulineBooks);
        $(document).on("click", "#GeneralEpistlesNav", choseGeneralBooks);
        $(document).on("click", "#RevelationNav", choseRevelationBook);
    };

    function chosePenteteuch() {
        // event.preventDefault();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav2").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav3"><div id="pentateuchButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Genesis">Genesis</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Exodus">Exodus</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Leviticus">Leviticus</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Numbers">Numbers</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Deuteronomy">Deuteronomy</button></div></nav>');
        $(document).on("click", "#Genesis", choseGenesis);
        $(document).on("click", "#Exodus", choseExodus);
    };

    function choseHistoricalBooks() {
        event.preventDefault();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav2").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav3"><div id="booksButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Joshua">Joshua</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Judges">Judges</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Ruth">Ruth</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstSamuel">1 Samuel</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondSamuel">2 Samuel</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstKings">1 Kings</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondKings">2 Kings</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstChronicles">1 Chronicles</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondChronicles">2 Chronicles</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Ezra">Ezra</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Nehemiah">Nehemiah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Esther">Esther</button></div></nav>');
    };

    function choseWisdomBooks() {
        event.preventDefault();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav2").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav3"><div id="wisdomButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Job">Job</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Psalms">Psalms</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Proverbs">Proverbs</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Ecclesiastes">Ecclesiastes</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SongOfSolomon">Song of Solomon</button></div></nav>');
    }

    function choseMajorProphetsBooks() {
        event.preventDefault();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav2").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav3"><div id="majorProphetsButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Isaiah">Isaiah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Jeremiah">Jeremiah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Lamentations">Lamentations</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Ezekiel">Ezekiel</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Daniel">Daniel</button></div></nav>');
    };

    function choseMinorProphetsBooks() {
        event.preventDefault();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav2").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav3"><div id="minorProphetsButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Hosea">Hosea</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Joel">Joel</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Amos">Amos</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Obadiah">Obadiah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Jonah">Jonah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Micah">Micah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Nahum">Nahum</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Habakkuk">Habakkuk</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Zephaniah">Zephaniah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Haggai">Haggai</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Zechariah">Zechariah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Malachi">Malachi</button></div></nav>');
    };

    function choseGospelsBooks() {
        event.preventDefault();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav2").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav3"><div id="GospelsButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Matthew">Matthew</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Mark">Mark</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Luke">Luke</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="John">John</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Acts">Acts</button></div></nav>');
    };

    function chosePaulineBooks() {
        event.preventDefault();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav2").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav3"><div id="PaulineButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Romans">Romans</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstCorinthians">1 Corinthians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondCorinthians">2 Corinthians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Galatians">Galatians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Ephesians">Ephesians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Philippians">Philippians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Colossians">Colossians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstThessalonians">1 Thessalonians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondThessalonians">2 Thessalonians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstTimothy">1 Timothy</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondTimothy">2 Timothy</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Titus">Titus</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Philemon">Philemon</button></div></nav>');
    };

    function choseGeneralBooks() {
        event.preventDefault();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav2").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav3"><div id="GeneralEpistlesButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Hebrews">Hebrews</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="James">James</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstPeter">1 Peter</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondPeter">2 Peter</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstJohn">1 John</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondJohn">2 John</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="ThirdJohn">3 John</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Jude">Jude</button></div></nav>');
    };

    function choseRevelationBook() {
        event.preventDefault();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav2").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav3"><div>Chapters being added soon<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Revelation">Revelation</button></div></nav>');
    };

    function choseGenesis() {
        // event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div>');
        for (i=1;i<51;i++) {
            $("#nav3").append('<button class="btn btn-default dropdown-toggle Gen" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav3").append("</div></nav>");
    };

    $(document).on("click", ".Gen", function () { searchTerms = ["genesis", this.id]; handleArtworkFormSubmit(event); });

    function choseExodus() {
        // event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div>');
        for (i=1;i<41;i++) {
            $("#nav3").append('<button class="btn btn-default dropdown-toggle Ex" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav3").append("</div></nav>");
    };

    $(document).on("click", ".Ex", function () { searchTerms = ["exodus", this.id]; handleArtworkFormSubmit(event); });

    function handleArtworkFormSubmit(event) {
        event.preventDefault();
        $("#welcomeDiv").hide();
        $("#scriptureHere").empty();
        $("#resultsHere").empty();
        $("#scriptureHere").show();
        $("#resultsHere").show();
        document.cookie = "same-site-cookie=SameSite=Lax";
        document.cookie = "cross-site-cookie=bar; SameSite=None; Secure";

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
                if (artToAdd === []) {
                } else {
                $("#resultsHere").append("<h1 class='rounded clearfix'>Art pieces for this chapter include: </h1><br /><br />");
                $("#resultsHere").append(artToAdd);
            }});

            $.get("api/videos/" + searchTerms[0] + "/" + searchTerms[1], function (data) {
                const videosToAdd = [];
                for (let i = 0; i < data.length; i++) {
                    videosToAdd.push(createNewVideo(data[i]));
                };
                if (videosToAdd === []) {
                } else {
                    $("#resultsHere").append("<h1 class='rounded clearfix'>Videos pieces for this chapter include: </h1><br /><br />");
                    $("#resultsHere").append(videosToAdd);
                }
            });

        } else {
            // This next chunk is if the first search word was not a Bible book
            $("#scriptureHere").empty();
            $("#scriptureHere").hide();
            $.get("api/artistArtwork/" + searchTerms[0], function (data) {
                const artToAdd = [];
                for (let i = 0; i < data.length; i++) {
                    artToAdd.push(createNewPiece(data[i]));
                }
                if (artToAdd === []) {
                } else {
                $("#resultsHere").append("<div class='card'><h1 class='rounded clearfix'>Art pieces for this artist include: </h1></div>");
                $("#resultsHere").append(artToAdd);
            }})

            $.get("api/artistVideos/" + searchTerms[0], function (data) {
                const videosToAdd = [];
                for (let i = 0; i < data.length; i++) {
                    videosToAdd.push(createNewVideo(data[i]));
                }
                if (videosToAdd === []) {
                } else {
                $("#resultsHere").append("<div class='card'><h1 class='rounded clearfix'>Videos for this artist include: </h1></div>");
                $("#resultsHere").append(videosToAdd);
            }})
        };
        function createNewPiece(piece) {
            event.preventDefault();
            return ('<div class="jumbotron jumbotron-fluid shadow p-2" id="resultsHere" style="width: 45vw;"><h3>' + piece.title + '</h3><img src="' + piece.picture + '" class="card-img-top img-fluid"><h6>' + piece.artist + '</h6><h6>Verse: ' + piece.verse + '</h6><button class="likeButton" id="' + piece.id + '">Click here to add a like, current likes: ' + piece.upvotes + '</button></div>');
        }

        function createNewVideo(piece) {
            event.preventDefault();
            return ('<div class="jumbotron"><h5 class="card-title">' + piece.title + '</h5><div>Artist: ' + piece.sourceCreator + '</div><div>Verse: ' + piece.verse + '</div><div>' + piece.videoEmbed + '</div><button class="likeButton" id="' + piece.id + '">Click here to add a like, current likes: ' + piece.upvotes + '</button></div>');
        }
    };

    $(document).on("submit", "#artworkForm", searchBarSubmit);
    var searchTerms;
    function searchBarSubmit() {
        searchTerms = $("#searchArtwork").val().toLowerCase().split(" ");
        handleArtworkFormSubmit(event);
    };

    $(document).on("click", ".likeButton", function () {
        let ArtID = $(this).attr("id");
        console.log("The ArtID is..." + ArtID);
        let upVotes = $(this).text() + 1;
        console.log(upVotes);
        $.ajax({
            type: 'PUT',
            url: '/api/artVotes/' + ArtID + "/" + upVotes,
            contentType: 'application/json',
            data: JSON.stringify({ id: ArtID, upvotes: upVotes })
        }).done(function () {
            console.log('SUCCESS');
        });
    });
});