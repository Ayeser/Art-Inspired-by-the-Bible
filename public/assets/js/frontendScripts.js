$(document).ready(function () {

    //Menu bar handling
    $(document).on("click", "#OT", makeOldTestamentNav);
    function makeOldTestamentNav() {
        event.preventDefault();
        $("#nav2").empty().hide(500);
        $("#nav3").empty().hide(500);
        $("#nav4").empty().hide(500);
        $("#nav2").show(1000).append('<div id="booksButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="PentateuchNav">Pentateuch</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="HistoricalBooksNav">Historical Books</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="WisdomNav">Wisdom</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="MajorProphetsNav">Major Prophets</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="MinorProphetsNav">Minor Prophets</button></div>');
        $(document).on("click", "#PentateuchNav", chosePenteteuch);
        $(document).on("click", "#HistoricalBooksNav", choseHistoricalBooks);
        $("#WisdomBooksNav").on("click", "#WisdomBooksNav", choseWisdomBooks);
        $("#MajorProphetsNav").on("click", "#MajorProphetsNav", choseMajorProphetsBooks);
        $("#MinorProphetsnav").on("click", "#MinorProphetsNav", choseMinorProphetsBooks);
    };
    $(document).on("click", "#NT", makeNewTestamentNav);
    function makeNewTestamentNav() {
        event.preventDefault();
        $("#nav2").empty().hide(500);
        $("#nav3").empty().hide(500);
        $("#nav4").empty().hide(500);
        $("#nav2").show(500).append('<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="GospelsNav">Gospels/Acts</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="PaulineNav">Pauline Epistles</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="EpistlesNav">General Epistles</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="RevelationNav">Revelation</button></nav>');
        $("#GospelsNav").on("click", "#GospelsNav", choseGospelsBooks);
        $("#PaulineEpistlesNav").on("click", "#PaulineEpistlesNav", chosePaulineBooks);
        $("#GeneralEpistlesNav").on("click", "#GeneralEpistlesNav", choseGeneralBooks);
        $("#RevelationNav").on("click", "#RevelationNav", choseRevelationBook);
    };
   
    function chosePenteteuch() {
        event.preventDefault();
        $("#nav3").empty().hide(500);
        $("#nav4").empty().hide(500);
        $("#nav3").show(500).append('<div id="pentateuchButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Genesis">Genesis</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Exodus">Exodus</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Leviticus">Leviticus</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Numbers">Numbers</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Deuteronomy">Deuteronomy</button></div>');
        $("#Genesis").on("click", "#Genesis", choseGenesis);
    };

    function choseHistoricalBooks() {
        event.preventDefault();
        $("#nav3").empty().hide(500);
        $("#nav4").empty().hide(500);
        $("#nav3").show(500).append('<div id="booksButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Joshua">Joshua</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Judges">Judges</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Ruth">Ruth</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstSamuel">1 Samuel</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondSamuel">2 Samuel</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstKings">1 Kings</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondKings">2 Kings</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstChronicles">1 Chronicles</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondChronicles">2 Chronicles</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Ezra">Ezra</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Nehemiah">Nehemiah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Esther">Esther</button></div>');
    };
    
    function choseWisdomBooks() {
        event.preventDefault();
        $("#nav3").empty().hide(500);
        $("#nav4").empty().hide(500);
        $("#nav3").show(500).append('<div id="wisdomButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Job">Job</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Psalms">Psalms</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Proverbs">Proverbs</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Ecclesiastes">Ecclesiastes</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SongOfSolomon">Song of Solomon</button></div>');
    }
 
    function choseMajorProphetsBooks() {
        event.preventDefault();
        $("#nav3").empty().hide(500);
        $("#nav4").empty().hide(500);
        $("#nav3").show(500).append('<div id="majorProphetsButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Isaiah">Isaiah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Jeremiah">Jeremiah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Lamentations">Lamentations</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Ezekiel">Ezekiel</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Daniel">Daniel</button></div>');
    };

    function choseMinorProphetsBooks() {
        event.preventDefault();
        $("#nav3").empty().hide(500);
        $("#nav4").empty().hide(500);
        $("#nav3").show(500).append('<div id="minorProphetsButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Hosea">Hosea</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Joel">Joel</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Amos">Amos</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Obadiah">Obadiah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Jonah">Jonah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Micah">Micah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Nahum">Nahum</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Habakkuk">Habakkuk</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Zephaniah">Zephaniah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Haggai">Haggai</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Zechariah">Zechariah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Malachi">Malachi</button></div>');
    };
    
    function choseGospelsBooks() {
        event.preventDefault();
        $("#nav3").empty().hide(500);
        $("#nav4").empty().hide(500);
        $("#nav3").show(500).append('<div id="GospelsButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Matthew">Matthew</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Mark">Mark</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Luke">Luke</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="John">John</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Acts">Acts</button></div>');
    };
  
    function chosePaulineBooks() {
        event.preventDefault();
        $("#nav3").empty().hide(500);
        $("#nav4").empty().hide(500);
        $("#nav3").show(500).append('<div id="PaulineButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Romans">Romans</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstCorinthians">1 Corinthians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondCorinthians">2 Corinthians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Galatians">Galatians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Ephesians">Ephesians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Philippians">Philippians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Colossians">Colossians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstThessalonians">1 Thessalonians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondThessalonians">2 Thessalonians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstTimothy">1 Timothy</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondTimothy">2 Timothy</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Titus">Titus</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Philemon">Philemon</button></div>');
    };

    function choseGeneralBooks() {
        event.preventDefault();
        $("#nav3").empty().hide(500);
        $("#nav4").empty().hide(500);
        $("#nav3").show(500).append('<div id="GeneralEpistlesButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Hebrews">Hebrews</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="James">James</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstPeter">1 Peter</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondPeter">2 Peter</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstJohn">1 John</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondJohn">2 John</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="ThirdJohn">3 John</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Jude">Jude</button></div>');
    };
   
    function choseRevelationBook() {
        event.preventDefault();
        $("#nav3").empty().hide(500);
        $("#nav4").empty().hide(500);
        $("#nav3").show(500).append('<div><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Revelation">Revelation</button></div>');
    };
   
    function choseGenesis() {
        event.preventDefault();
        $("#nav4").empty().hide(500);
        $("#nav4").show(500).append('<div><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen1">1</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen2">2</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen3">3</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen4">4</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen5">5</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen6">6</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen7">7</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen8">8</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen9">9</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen10">10</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen11">11</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen12">12</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen13">13</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen14">14</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen15">15</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen16">16</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen17">17</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen18">18</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen19">19</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen20">20</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen21">21</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen22">22</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen23">23</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen24">24</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen25">25</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen26">26</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen27">27</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen28">28</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen29">29</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen30">30</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen31">31</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen32">32</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen33">33</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen34">34</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen35">35</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen36">36</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen37">37</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen38">38</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen39">39</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen40">40</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen41">41</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen42">42</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen43">43</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen44">44</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen45">45</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen46">46</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen47">47</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen48">48</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen49">49</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen50">50</button></div>');
    };

    $("#contestButton").on("click", function () {
        $.post("api/contestPiece/", { title: "Exodus", chapter: "1", picture: upload.cachedFileArray[0] })
            .done(function (data) {
                console.log("Picture uploaded: " + data);
            });
    });

    $(document).on("submit", "#artworkForm", handleArtworkFormSubmit);
    var searchTerms;
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
                return('<div class="card" style="width: 18rem;"><img class="card-img-top" src="' + piece.picture + '" alt="Card image cap"><div class="card-body"><h5 class="card-title">' + piece.title + '</h5></div><div>Artist: ' + piece.artist + '</div><div>Verse: ' + piece.verse + '</div></div>');
            }

            function createNewVideo(piece) {
                return('<div class="card" style="width: 18rem;"><div class="card-body">' + piece.videoEmbed + '</div><div><h5 class="card-title">' + piece.title + '</h5></div><div>Artist: ' + piece.artist + '</div><div>Verse: ' + piece.verse + '</div></div>');
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
                return('<div class="card" style="width: 18rem;"><img class="card-img-top" src="' + piece.picture + '" alt="Card image cap"><div class="card-body"><h5 class="card-title">' + piece.title + '</h5></div><div>Artist: ' + piece.artist + '</div><div>Verse: ' + piece.verse + '</div></div>');
            }

            $.get("api/artistVideos/" + searchTerms[0], function (data) {
                const videosToAdd = [];
                for (let i = 0; i < data.length; i++) {
                    videosToAdd.push(createNewVideo(data[i]));
                }
                $("#resultsHere").append("<h1>Videos for this artist include: </h1><br /><br />");
                $("#resultsHere").append(videosToAdd);
            })

            function createNewVideo(piece) {
                return('<div class="card" style="width: 18rem;"><div class="card-body">' + piece.videoEmbed + '</div><div><h5 class="card-title">' + piece.title + '</h5></div><div>Artist: ' + piece.artist + '</div><div>Verse: ' + piece.verse + '</div></div>');
            }
        };

    }
});