$(document).ready(function () {

    $("#scriptureHere").hide();
    $("#resultsHere").hide();
    //Menu bar handling
    $(document).on("click", "#OT", makeOldTestamentNav);
    function makeOldTestamentNav() {
        event.preventDefault();
        $("#nav2").remove();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav1").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav2"><div id="booksButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="PentateuchNav">Pentateuch</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="HistoricalBooksNav">Historical Books</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="WisdomNav">Wisdom</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="MajorProphetsNav">Major Prophets</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="MinorProphetsNav">Minor Prophets</button></div></nav>');
        $(document).on("click", "#PentateuchNav", chosePentateuch);
        $(document).on("click", "#HistoricalBooksNav", choseHistoricalBooks);
        $(document).on("click", "#WisdomBooksNav", choseWisdomBooks);
        $(document).on("click", "#MajorProphetsNav", choseMajorProphetsBooks);
        $(document).on("click", "#MinorProphetsNav", choseMinorProphetsBooks);
    };
    $(document).on("click", "#NT", makeNewTestamentNav);
    function makeNewTestamentNav() {
        event.preventDefault();
        $("#nav2").remove();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav1").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav2"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="GospelsNav">Gospels/Acts</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="PaulineNav">Pauline Epistles</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="EpistlesNav">General Epistles</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="RevelationNav">Revelation</button></nav></nav>');
        $(document).on("click", "#GospelsNav", choseGospelsBooks);
        $(document).on("click", "#PaulineEpistlesNav", chosePaulineBooks);
        $(document).on("click", "#GeneralEpistlesNav", choseGeneralBooks);
        $(document).on("click", "#RevelationNav", choseRevelationBook);
    };

    function chosePentateuch() {
        event.preventDefault();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav2").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav3"><div id="pentateuchButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Genesis">Genesis</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Exodus">Exodus</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Leviticus">Leviticus</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Numbers">Numbers</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Deuteronomy">Deuteronomy</button></div></nav>');
        $(document).on("click", "#Genesis", choseGenesis);
        $(document).on("click", "#Exodus", choseExodus);
        $(document).on("click", "#Leviticus", choseLeviticus);
        $(document).on("click", "#Numbers", choseNumbers);
        $(document).on("click", "#Deuteronomy", choseDeuteronomy);
    };

    function choseHistoricalBooks() {
        event.preventDefault();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav2").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav3"><div id="booksButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Joshua">Joshua</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Judges">Judges</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Ruth">Ruth</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstSamuel">1 Samuel</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondSamuel">2 Samuel</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstKings">1 Kings</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondKings">2 Kings</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstChronicles">1 Chronicles</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondChronicles">2 Chronicles</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Ezra">Ezra</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Nehemiah">Nehemiah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Esther">Esther</button></div></nav>');
        $(document).on("click", "#Joshua", choseJoshua);
        $(document).on("click", "#Judges", choseJudges);
        $(document).on("click", "#Ruth", choseRuth);
        $(document).on("click", "#FirstSamuel", choseFirstSamuel);
        $(document).on("click", "#SecondSamuel", choseSecondSamuel);
        $(document).on("click", "#FirstKings", choseFirstKings);
        $(document).on("click", "#SecondKings", choseSecondKings);
        $(document).on("click", "#FirstChronicles", choseFirstChronicles);
        $(document).on("click", "#SecondChronicles", choseSecondChronicles);
        $(document).on("click", "#Ezra", choseEzra);
        $(document).on("click", "#Nehemiah", choseNehemiah);
        $(document).on("click", "#Esther", choseEsther);
    };

    function choseWisdomBooks() {
        event.preventDefault();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav2").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav3"><div id="wisdomButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Job">Job</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Psalms">Psalms</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Proverbs">Proverbs</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Ecclesiastes">Ecclesiastes</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SongOfSolomon">Song of Solomon</button></div></nav>');
        $(document).on("click", "#Job", choseJob);
        $(document).on("click", "#Psalms", chosePsalms);
        $(document).on("click", "#Proverbs", choseProverbs);
        $(document).on("click", "#Ecclesiastes", choseEcclesiastes);
        $(document).on("click", "#SongOfSolomon", choseSongofSolomon);
    }

    function choseMajorProphetsBooks() {
        event.preventDefault();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav2").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav3"><div id="majorProphetsButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Isaiah">Isaiah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Jeremiah">Jeremiah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Lamentations">Lamentations</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Ezekiel">Ezekiel</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Daniel">Daniel</button></div></nav>');
        $(document).on("click", "#Isaiah", choseIsaiah);
        $(document).on("click", "#Jeremiah", choseJeremiah);
        $(document).on("click", "#Lamentations", choseLamentations);
        $(document).on("click", "#Ezekiel", choseEzekiel);
        $(document).on("click", "#Daniel", choseDaniel);
    };

    function choseMinorProphetsBooks() {
        event.preventDefault();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav2").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav3"><div id="minorProphetsButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Hosea">Hosea</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Joel">Joel</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Amos">Amos</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Obadiah">Obadiah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Jonah">Jonah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Micah">Micah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Nahum">Nahum</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Habakkuk">Habakkuk</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Zephaniah">Zephaniah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Haggai">Haggai</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Zechariah">Zechariah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Malachi">Malachi</button></div></nav>');
        $(document).on("click", "#Hosea", choseHosea);
        $(document).on("click", "#Joel", choseJoel);
        $(document).on("click", "#Amos", choseAmos);
        $(document).on("click", "#Obadiah", choseObadiah);
        $(document).on("click", "#Jonah", choseJonah);
        $(document).on("click", "#Micah", choseMicah);
        $(document).on("click", "#Nahum", choseNahum);
        $(document).on("click", "#Habakkuk", choseHabakkuk);
        $(document).on("click", "#Zephaniah", choseZephaniah);
        $(document).on("click", "#Haggai", choseHaggai);
        $(document).on("click", "#Zechariah", choseZechariah);
        $(document).on("click", "#Malachi", choseMalachi);
    };

    function choseGospelsBooks() {
        event.preventDefault();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav2").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav3"><div id="GospelsButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Matthew">Matthew</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Mark">Mark</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Luke">Luke</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="John">John</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Acts">Acts</button></div></nav>');
        $(document).on("click", "#Matthew", choseMatthew);
        $(document).on("click", "#Mark", choseMark);
        $(document).on("click", "#Luke", choseLuke);
        $(document).on("click", "#John", choseJohn);
        $(document).on("click", "#Acts", choseActs);
    };

    function chosePaulineBooks() {
        event.preventDefault();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav2").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav3"><div id="PaulineButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Romans">Romans</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstCorinthians">1 Corinthians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondCorinthians">2 Corinthians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Galatians">Galatians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Ephesians">Ephesians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Philippians">Philippians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Colossians">Colossians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstThessalonians">1 Thessalonians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondThessalonians">2 Thessalonians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstTimothy">1 Timothy</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondTimothy">2 Timothy</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Titus">Titus</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Philemon">Philemon</button></div></nav>');
        $(document).on("click", "#Romans", choseRomans);
        $(document).on("click", "#FirstCorinthians", choseFirstCorinthians);
        $(document).on("click", "#SecondCorinthians", choseSecondCorinthians);
        $(document).on("click", "#Galatians", choseGalatians);
        $(document).on("click", "#Ephesians", choseEphesians);
        $(document).on("click", "#Philippians", chosePhilippians);
        $(document).on("click", "#Colossians", choseColossians);
        $(document).on("click", "#FirstThessalonians", choseFirstThessalonians);
        $(document).on("click", "#SecondThessalonians", choseSecondThessalonians);
        $(document).on("click", "#FirstTimothy", choseFirstTimothy);
        $(document).on("click", "#SecondTimothy", choseSecondTimothy);
        $(document).on("click", "#Titus", choseTitus);
        $(document).on("click", "#Philemon", chosePhilemon);
    };

    function choseGeneralBooks() {
        event.preventDefault();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav2").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav3"><div id="GeneralEpistlesButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Hebrews">Hebrews</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="James">James</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstPeter">1 Peter</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondPeter">2 Peter</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstJohn">1 John</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondJohn">2 John</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="ThirdJohn">3 John</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Jude">Jude</button></div></nav>');
        $(document).on("click", "#Hebrews", choseHebrews);
        $(document).on("click", "#James", choseJames);
        $(document).on("click", "#FirstPeter", choseFirstPeter);
        $(document).on("click", "#SecondPeter", choseSecondPeter);
        $(document).on("click", "#FirstJohn", choseFirstJohn);
        $(document).on("click", "#SecondJohn", choseSecondJohn);
        $(document).on("click", "#ThirdJohn", choseThirdJohn);
        $(document).on("click", "#Jude", choseJude);
    };

    function choseRevelationBook() {
        event.preventDefault();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav2").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav3"><div>Chapters being added soon<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Revelation">Revelation</button></div></nav>');
        $(document).on("click", "#Revelation", choseRevelation);
    };

    function choseGenesis() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 51; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Gen" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Gen", function () { searchTerms = ["genesis", this.id]; handleArtworkFormSubmit(event); });

    function choseExodus() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 41; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Ex" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Ex", function () { searchTerms = ["exodus", this.id]; handleArtworkFormSubmit(event); });

    function choseLeviticus() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 29; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Lev" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Lev", function () { searchTerms = ["leviticus", this.id]; handleArtworkFormSubmit(event); });

    function choseNumbers() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 37; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Num" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Num", function () { searchTerms = ["numbers", this.id]; handleArtworkFormSubmit(event); });

    function choseDeuteronomy() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 35; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Deut" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Deut", function () { searchTerms = ["deuteronomy", this.id]; handleArtworkFormSubmit(event); });

    function choseJoshua() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 25; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Josh" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Josh", function () { searchTerms = ["joshua", this.id]; handleArtworkFormSubmit(event); });

    function choseJudges() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 22; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Judge" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Judge", function () { searchTerms = ["judges", this.id]; handleArtworkFormSubmit(event); });

    function choseRuth() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 5; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Rut" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Rut", function () { searchTerms = ["ruth", this.id]; handleArtworkFormSubmit(event); });

    function choseFirstSamuel() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 32; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle FSam" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".FSam", function () { searchTerms = ["1", "samuel", this.id]; handleArtworkFormSubmit(event); });

    function choseSecondSamuel() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 25; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle SSam" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".SSam", function () { searchTerms = ["2", "samuel", this.id]; handleArtworkFormSubmit(event); });

    function choseFirstKings() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 23; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle FKin" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".FKin", function () { searchTerms = ["1", "kings", this.id]; handleArtworkFormSubmit(event); });

    function choseSecondKings() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 26; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle SKin" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".SKin", function () { searchTerms = ["2", "kings", this.id]; handleArtworkFormSubmit(event); });

    function choseFirstChronicles() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 30; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle FChron" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".FChron", function () { searchTerms = ["1", "chronicles", this.id]; handleArtworkFormSubmit(event); });

    function choseSecondChronicles() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 37; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle SChron" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".SChron", function () { searchTerms = ["2", "chronicles", this.id]; handleArtworkFormSubmit(event); });

    function choseEzra() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 11; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Ezr" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Ezr", function () { searchTerms = ["ezra", this.id]; handleArtworkFormSubmit(event); });

    function choseNehemiah() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 14; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Neh" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Neh", function () { searchTerms = ["nehemiah", this.id]; handleArtworkFormSubmit(event); });

    function choseEsther() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 11; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Esth" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Esth", function () { searchTerms = ["esther", this.id]; handleArtworkFormSubmit(event); });

    function choseJob() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 43; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Jo" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Jo", function () { searchTerms = ["job", this.id]; handleArtworkFormSubmit(event); });

    function chosePsalms() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 151; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Psa" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Psa", function () { searchTerms = ["psalms", this.id]; handleArtworkFormSubmit(event); });

    function choseProverbs() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 32; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Prov" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Prov", function () { searchTerms = ["proverbs", this.id]; handleArtworkFormSubmit(event); });

    function choseEcclesiastes() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 13; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Eccl" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Eccl", function () { searchTerms = ["ecclesiastes", this.id]; handleArtworkFormSubmit(event); });

    function choseSongofSolomon() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 9; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle SoS" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".SoS", function () { searchTerms = ["song", "of", "solomon", this.id]; handleArtworkFormSubmit(event); });

    function choseIsaiah() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 67; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Isa" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Isa", function () { searchTerms = ["isaiah", this.id]; handleArtworkFormSubmit(event); });

    function choseJeremiah() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 53; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Jer" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Jer", function () { searchTerms = ["jeremiah", this.id]; handleArtworkFormSubmit(event); });

    function choseLamentations() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 6; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Lam" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Lam", function () { searchTerms = ["lamentations", this.id]; handleArtworkFormSubmit(event); });

    function choseEzekiel() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 49; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Eze" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Eze", function () { searchTerms = ["ezekiel", this.id]; handleArtworkFormSubmit(event); });

    function choseDaniel() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 13; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Dan" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Dan", function () { searchTerms = ["daniel", this.id]; handleArtworkFormSubmit(event); });

    function choseHosea() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 15; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Hos" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Hos", function () { searchTerms = ["hosea", this.id]; handleArtworkFormSubmit(event); });

    function choseJoel() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 4; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Joe" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Joe", function () { searchTerms = ["joel", this.id]; handleArtworkFormSubmit(event); });

    function choseAmos() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 10; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Amo" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Amo", function () { searchTerms = ["amos", this.id]; handleArtworkFormSubmit(event); });

    function choseObadiah() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 2; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Oba" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Oba", function () { searchTerms = ["obadiah", this.id]; handleArtworkFormSubmit(event); });

    function choseJonah() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 5; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Jona" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Jona", function () { searchTerms = ["jonah", this.id]; handleArtworkFormSubmit(event); });

    function choseMicah() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 8; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Mic" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Mic", function () { searchTerms = ["micah", this.id]; handleArtworkFormSubmit(event); });

    function choseNahum() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 4; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Nah" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Nah", function () { searchTerms = ["nahum", this.id]; handleArtworkFormSubmit(event); });

    function choseHabakkuk() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 4; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Hab" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Hab", function () { searchTerms = ["habakkuk", this.id]; handleArtworkFormSubmit(event); });

    function choseZephaniah() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 4; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Zeph" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Zeph", function () { searchTerms = ["zephaniah", this.id]; handleArtworkFormSubmit(event); });

    function choseHaggai() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 3; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Hag" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Hag", function () { searchTerms = ["haggai", this.id]; handleArtworkFormSubmit(event); });

    function choseZechariah() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 15; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Zech" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Zech", function () { searchTerms = ["zechariah", this.id]; handleArtworkFormSubmit(event); });

    function choseMalachi() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 5; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Mala" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Mala", function () { searchTerms = ["malachi", this.id]; handleArtworkFormSubmit(event); });

    function choseMatthew() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 29; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Matt" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Matt", function () { searchTerms = ["matthew", this.id]; handleArtworkFormSubmit(event); });

    function choseMark() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 17; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Mar" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Mar", function () { searchTerms = ["mark", this.id]; handleArtworkFormSubmit(event); });

    function choseLuke() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 25; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Luk" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Luk", function () { searchTerms = ["luke", this.id]; handleArtworkFormSubmit(event); });

    function choseJohn() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 22; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Joh" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Joh", function () { searchTerms = ["john", this.id]; handleArtworkFormSubmit(event); });

    function choseActs() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 29; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Act" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Act", function () { searchTerms = ["acts", this.id]; handleArtworkFormSubmit(event); });

    function choseRomans() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 17; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Rom" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Rom", function () { searchTerms = ["romans", this.id]; handleArtworkFormSubmit(event); });

    function choseFirstCorinthians() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 17; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle FCor" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".FCor", function () { searchTerms = ["1", "corinthians", this.id]; handleArtworkFormSubmit(event); });

    function choseSecondCorinthians() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 14; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle SCor" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".SCor", function () { searchTerms = ["2", "corinthians", this.id]; handleArtworkFormSubmit(event); });

    function choseGalatians() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 7; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Gal" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Gal", function () { searchTerms = ["galatians", this.id]; handleArtworkFormSubmit(event); });

    function choseEphesians() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 7; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Eph" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Eph", function () { searchTerms = ["ephesians", this.id]; handleArtworkFormSubmit(event); });

    function chosePhilippians() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 5; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Phil" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Phil", function () { searchTerms = ["philippians", this.id]; handleArtworkFormSubmit(event); });

    function choseColossians() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 5; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Col" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Col", function () { searchTerms = ["colossians", this.id]; handleArtworkFormSubmit(event); });

    function choseFirstThessalonians() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 6; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle FThes" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".FThes", function () { searchTerms = ["1", "thessalonians", this.id]; handleArtworkFormSubmit(event); });

    function choseSecondThessalonians() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 4; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle SThes" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".SThes", function () { searchTerms = ["2", "thessalonians", this.id]; handleArtworkFormSubmit(event); });

    function choseFirstTimothy() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 7; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle FTim" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".FTim", function () { searchTerms = ["1", "timothy", this.id]; handleArtworkFormSubmit(event); });

    function choseSecondTimothy() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 5; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle STim" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".STim", function () { searchTerms = ["2", "timothy", this.id]; handleArtworkFormSubmit(event); });

    function choseTitus() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 4; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Tit" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Tit", function () { searchTerms = ["titus", this.id]; handleArtworkFormSubmit(event); });

    function chosePhilemon() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 2; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle phile" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".phile", function () { searchTerms = ["philemon", this.id]; handleArtworkFormSubmit(event); });

    function choseHebrews() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 14; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle heb" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".heb", function () { searchTerms = ["hebrews", this.id]; handleArtworkFormSubmit(event); });

    function choseJames() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 6; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle jam" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".jam", function () { searchTerms = ["james", this.id]; handleArtworkFormSubmit(event); });

    function choseFirstPeter() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 6; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle FPet" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".FPet", function () { searchTerms = ["1", "peter", this.id]; handleArtworkFormSubmit(event); });

    function choseSecondPeter() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 4; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle SPet" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".SPet", function () { searchTerms = ["2", "peter", this.id]; handleArtworkFormSubmit(event); });

    function choseFirstJohn() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 6; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle FJohn" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".FJohn", function () { searchTerms = ["1", "john", this.id]; handleArtworkFormSubmit(event); });

    function choseSecondJohn() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 2; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle SJohn" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".SJohn", function () { searchTerms = ["2", "john", this.id]; handleArtworkFormSubmit(event); });

    function choseThirdJohn() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 2; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle TJohn" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".TJohn", function () { searchTerms = ["3", "john", this.id]; handleArtworkFormSubmit(event); });

    function choseJude() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 2; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Jud" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Jud", function () { searchTerms = ["jude", this.id]; handleArtworkFormSubmit(event); });

    function choseRevelation() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded clearfix" id="nav4"><div id="navDiv3>');
        for (i = 1; i < 23; i++) {
            $("#navDiv3").append('<button class="btn btn-default dropdown-toggle Rev" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
        };
        $("#nav4").append("</div></nav>");
    };

    $(document).on("click", ".Rev", function () { searchTerms = ["revelation", this.id]; handleArtworkFormSubmit(event); });

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
        if (searchTerms[0] == "genesis" || searchTerms[0] == "exodus" || searchTerms[0] == "leviticus" || searchTerms[0] == "numbers" || searchTerms[0] == "deuteronomy" || searchTerms[0] == "joshua" || searchTerms[0] == "judges" || searchTerms[0] == "ruth" || searchTerms[0] == "1" || searchTerms[0] == "2" || searchTerms[0] == "ezra" || searchTerms[0] == "nehemiah" || searchTerms[0] == "esther" || searchTerms[0] == "job" || searchTerms[0] == "psalms" || searchTerms[0] == "proverbs" || searchTerms[0] == "ecclesiastes" || searchTerms[0] == "song" || searchTerms[0] == "isaiah" || searchTerms[0] == "jeremiah" || searchTerms[0] == "lamentations" || searchTerms[0] == "ezekiel" || searchTerms[0] == "daniel" || searchTerms[0] == "hosea" || searchTerms[0] == "joel" || searchTerms[0] == "amos" || searchTerms[0] == "obadiah" || searchTerms[0] == "jonah" || searchTerms[0] == "micah" || searchTerms[0] == "nahum" || searchTerms[0] == "habakkuk" || searchTerms[0] == "zephaniah" || searchTerms[0] == "haggai" || searchTerms[0] == "zechariah" || searchTerms[0] == "malachi" || searchTerms[0] == "matthew" || searchTerms[0] == "mark" || searchTerms[0] == "luke" || searchTerms[0] == "john" || searchTerms[0] == "acts" || searchTerms[0] == "romans" || searchTerms[0] == "galatians" || searchTerms[0] == "ephesians" || searchTerms[0] == "philippians" || searchTerms[0] == "colossians" || searchTerms[0] == "titus" || searchTerms[0] == "philemon" || searchTerms[0] == "hebrews" || searchTerms[0] == "james" || searchTerms[0] == "jude" || searchTerms[0] == "revelation" || searchTerms[0] == "1" || searchTerms[0] == "2" || searchTerms[0] == "3") {searchBibleArt() }
        else if (searchTerms[0] === "1" || searchTerms[0] == "2" || searchTerms[0] == "3") {
            searchTerm[0] = searchTerm[0] + " " + searchterm[1];
            searchTerm[1] = searchTerm[2];
            searchBibleArt()
        } else if (searchTerms[0] === "song") {
            searchTerm[0] = "song of solomon";
            searchTerm[1] = searchTerm[3];
            searchBibleArt()
        } else if (searchTerms[0] === "gen") {
            searchTerm[0] = "genesis";
            searchBibleArt()
        } else if (searchTerms[0] === "ex") {
            searchTerm[0] = "exodus";
            searchBibleArt()
        } else if (searchTerms[0] === "lev") {
            searchTerm[0] = "leviticus";
            searchBibleArt()
        } else if (searchTerms[0] === "num") {
            searchTerm[0] = "numbers";
            searchBibleArt()
        } else if (searchTerms[0] === "deut") {
            searchTerm[0] = "deuteronomy";
            searchBibleArt()
        } else if (searchTerms[0] === "neh") {
            searchTerm[0] = "nehemiah";
            searchBibleArt()
        } else if (searchTerms[0] === "psa" || searchTerms[0] == "salms" || searchTerms[0] == "psalm") {
            searchTerm[0] = "psalms";
            searchBibleArt()
        } else if (searchTerms[0] === "pro") {
            searchTerm[0] = "proverbs";
            searchBibleArt()
        } else if (searchTerms[0] === "ecc" || searchTerms[0] == "eclesiastes") {
            searchTerm[0] = "ecclesiastes";
            searchBibleArt()
        } else if (searchTerms[0] === "isa") {
            searchTerm[0] = "isaiah";
            searchBibleArt()
        } else if (searchTerms[0] === "jer") {
            searchTerm[0] = "jeremiah";
            searchBibleArt()
        } else if (searchTerms[0] === "lam") {
            searchTerm[0] = "lamentations";
            searchBibleArt()
        } else if (searchTerms[0] === "eze") {
            searchTerm[0] = "ezekiel";
            searchBibleArt()
        } else if (searchTerms[0] === "hos") {
            searchTerm[0] = "hosea";
            searchBibleArt()
        } else if (searchTerms[0] === "oba") {
            searchTerm[0] = "obadiah";
            searchBibleArt()
        } else if (searchTerms[0] === "habakuk") {
            searchTerm[0] = "habakkuk";
            searchBibleArt()
        } else if (searchTerms[0] === "hagai") {
            searchTerm[0] = "haggai";
            searchBibleArt()
        } else if (searchTerms[0] === "zech") {
            searchTerm[0] = "zechariah";
            searchBibleArt()
        } else if (searchTerms[0] === "zeph") {
            searchTerm[0] = "zephaniah";
            searchBibleArt()
        } else if (searchTerms[0] === "malaki" || searchTerms[0] == "mal") {
            searchTerm[0] = "malachi";
            searchBibleArt()
        } else if (searchTerms[0] === "mat") {
            searchTerm[0] = "matthew";
            searchBibleArt()
        } else if (searchTerms[0] === "rom") {
            searchTerm[0] = "romans";
            searchBibleArt()
        } else if (searchTerms[0] === "gal") {
            searchTerm[0] = "galatians";
            searchBibleArt()
        } else if (searchTerms[0] === "eph") {
            searchTerm[0] = "ephesians";
            searchBibleArt()
        } else if (searchTerms[0] === "phil" || searchTerms[0] == "philipians") {
            searchTerm[0] = "philippians";
            searchBibleArt()
        } else if (searchTerms[0] === "col") {
            searchTerm[0] = "colossians";
            searchBibleArt()
        } else if (searchTerms[0] === "heb") {
            searchTerm[0] = "hebrews";
            searchBibleArt()
        } else if (searchTerms[0] === "rev" || searchTerms[0] == "revelations") {
            searchTerm[0] = "revelation";
            searchBibleArt()
        } else {
            searchArtistInstead()
        }
    };

function searchBibleArt() {
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
            }
        });

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
    }

    function searchArtistInstead() {
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
            }
        })

        $.get("api/artistVideos/" + searchTerms[0], function (data) {
            const videosToAdd = [];
            for (let i = 0; i < data.length; i++) {
                videosToAdd.push(createNewVideo(data[i]));
            }
            if (videosToAdd === []) {
            } else {
                $("#resultsHere").append("<div class='card'><h1 class='rounded clearfix'>Videos for this artist include: </h1></div>");
                $("#resultsHere").append(videosToAdd);
            }
        })
    };

    function createNewPiece(piece) {
        event.preventDefault();
        return ('<div class="jumbotron jumbotron-fluid shadow p-2" id="resultsHere" style="width: 45vw;"><h3>' + piece.title + '</h3><img src="' + piece.picture + '" class="card-img-top img-fluid"><h6>' + piece.artist + '</h6><h6>Verse: ' + piece.verse + '</h6><button class="likeButton" id="' + piece.id + '">Click here to add a like, current likes: ' + piece.upvotes + '</button></div>');
    }

    function createNewVideo(piece) {
        event.preventDefault();
        return ('<div class="jumbotron"><h5 class="card-title">' + piece.title + '</h5><div>Artist: ' + piece.sourceCreator + '</div><div>Verse: ' + piece.verse + '</div><div>' + piece.videoEmbed + '</div><button class="likeButton" id="' + piece.id + '">Click here to add a like, current likes: ' + piece.upvotes + '</button></div>');
    }

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

        $.put("/api/artVotes/" + ArtID + "/" + upVotes, {
            id: req.params.ARTID,
            upvotes: req.params.upVotes
        }).then(function (data, status) {
            $(this).html("You added your like!");
            console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
        }).catch(function (err) {
            console.log(err);
        });
    });
});