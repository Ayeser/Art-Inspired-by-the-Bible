$(document).ready(function () {
    $("#afterSearchDiv").hide();
    //Menu bar handling
    $(document).on("click", "#OT", makeOldTestamentNav);
    function makeOldTestamentNav() {
        event.preventDefault();
        $("#nav2").remove();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav1").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav2"><a class="nav-link" href="#" id="PentateuchNav">Pentateuch</a><a class="nav-link" href="#" id="HistoricalBooksNav">Historical Books</a><a class="nav-link" href="#" id="WisdomBooksNav">Wisdom</a><a class="nav-link" href="#" id="MajorProphetsNav">Major Prophets</a><a class="nav-link" href="#" id="MinorProphetsNav">Minor Prophets</a></nav>');
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
        $("#nav1").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav2"><a class="nav-link" href="#" id="GospelsNav">Gospels/Acts</a><a class="nav-link" href="#" id="PaulineEpistlesNav">Pauline Epistles</a><a class="nav-link" href="#" id="GeneralEpistlesNav">General Epistles</a><a class="nav-link" href="#" id="RevelationNav">Revelation</a></nav></nav>');
        $(document).on("click", "#GospelsNav", choseGospelsBooks);
        $(document).on("click", "#PaulineEpistlesNav", chosePaulineBooks);
        $(document).on("click", "#GeneralEpistlesNav", choseGeneralBooks);
        $(document).on("click", "#RevelationNav", choseRevelationBook);
    };

    function chosePentateuch() {
        event.preventDefault();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav2").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav3"><a class="nav-link" href="#" id="Genesis" chapsInBook="51">Genesis</a><a class="nav-link" href="#" id="Exodus" chapsInBook="41">Exodus</a><a class="nav-link" href="#" id="Leviticus" chapsInBook="28">Leviticus</a><a class="nav-link" href="#" id="Numbers" chapsInBook="37">Numbers</a><a class="nav-link" href="#" id="Deuteronomy" chapsInBook="35">Deuteronomy</a></nav>');
    };
    $(document).on("click", "#Genesis", choseGenesis);
    $(document).on("click", "#Exodus", choseExodus);
    $(document).on("click", "#Leviticus", choseLeviticus);
    $(document).on("click", "#Numbers", choseNumbers);
    $(document).on("click", "#Deuteronomy", choseDeuteronomy);
    
    function choseHistoricalBooks() {
        event.preventDefault();
        $("#nav3").remove();
        $("#nav4").remove();
        $("#nav2").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav3"><a class="nav-link" href="#" id="Joshua">Joshua</a><a class="nav-link" href="#" id="Judges">Judges</a><a class="nav-link" href="#" id="Ruth">Ruth</a><a class="nav-link" href="#" id="FirstSamuel">1 Samuel</a><a class="nav-link" href="#" id="SecondSamuel">2 Samuel</a><a class="nav-link" href="#" id="FirstKings">1 Kings</a><a class="nav-link" href="#" id="SecondKings">2 Kings</a><a class="nav-link" href="#" id="FirstChronicles">1 Chronicles</a><a class="nav-link" href="#" id="SecondChronicles">2 Chronicles</a><a class="nav-link" href="#" id="Ezra">Ezra</a><a class="nav-link" href="#" id="Nehemiah">Nehemiah</a><a class="nav-link" href="#" id="Esther">Esther</a></nav>');
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
        $("#nav2").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav3"><a class="nav-link" href="#" id="Job">Job</a><a class="nav-link" href="#" id="Psalms">Psalms</a><a class="nav-link" href="#" id="Proverbs">Proverbs</a><a class="nav-link" href="#" id="Ecclesiastes">Ecclesiastes</a><a class="nav-link" href="#" id="SongOfSolomon">Song of Solomon</a></nav>');
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
        $("#nav2").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav3"><a class="nav-link" href="#" id="Isaiah">Isaiah</a><a class="nav-link" href="#" id="Jeremiah">Jeremiah</a><a class="nav-link" href="#" id="Lamentations">Lamentations</a><a class="nav-link" href="#" id="Ezekiel">Ezekiel</a><a class="nav-link" href="#" id="Daniel">Daniel</a></nav>');
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
        $("#nav2").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav3"><a class="nav-link" href="#" id="Hosea">Hosea</a><a class="nav-link" href="#" id="Joel">Joel</a><a class="nav-link" href="#" id="Amos">Amos</a><a class="nav-link" href="#" id="Obadiah">Obadiah</a><a class="nav-link" href="#" id="Jonah">Jonah</a><a class="nav-link" href="#" id="Micah">Micah</a><a class="nav-link" href="#" id="Nahum">Nahum</a><a class="nav-link" href="#" id="Habakkuk">Habakkuk</a><a class="nav-link" href="#" id="Zephaniah">Zephaniah</a><a class="nav-link" href="#" id="Haggai">Haggai</a><a class="nav-link" href="#" id="Zechariah">Zechariah</a><a class="nav-link" href="#" id="Malachi">Malachi</a></nav>');
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
        $("#nav2").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav3"><a class="nav-link" href="#" id="Matthew">Matthew</a><a class="nav-link" href="#" id="Mark">Mark</a><a class="nav-link" href="#" id="Luke">Luke</a><a class="nav-link" href="#" id="John">John</a><a class="nav-link" href="#" id="Acts">Acts</a></nav>');
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
        $("#nav2").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav3"><a class="nav-link" href="#" id="Romans">Romans</a><a class="nav-link" href="#" id="FirstCorinthians">1 Corinthians</a><a class="nav-link" href="#" id="SecondCorinthians">2 Corinthians</a><a class="nav-link" href="#" id="Galatians">Galatians</a><a class="nav-link" href="#" id="Ephesians">Ephesians</a><a class="nav-link" href="#" id="Philippians">Philippians</a><a class="nav-link" href="#" id="Colossians">Colossians</a><a class="nav-link" href="#" id="FirstThessalonians">1 Thessalonians</a><a class="nav-link" href="#" id="SecondThessalonians">2 Thessalonians</a><a class="nav-link" href="#" id="FirstTimothy">1 Timothy</a><a class="nav-link" href="#" id="SecondTimothy">2 Timothy</a><a class="nav-link" href="#" id="Titus">Titus</a><a class="nav-link" href="#" id="Philemon">Philemon</a></nav>');
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
        $("#nav2").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav3"><a class="nav-link" href="#" id="Hebrews">Hebrews</a><a class="nav-link" href="#" id="James">James</a><a class="nav-link" href="#" id="FirstPeter">1 Peter</a><a class="nav-link" href="#" id="SecondPeter">2 Peter</a><a class="nav-link" href="#" id="FirstJohn">1 John</a><a class="nav-link" href="#" id="SecondJohn">2 John</a><a class="nav-link" href="#" id="ThirdJohn">3 John</a><a class="nav-link" href="#" id="Jude">Jude</a></nav>');
        $(document).on("click", "#Hebrews", choseHebrews);w
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
    $("#nav2").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav3">');
    for (i = 1; i < 23; i++) {
        $("#nav2").append('<a class="nav-link" href="#" id="rev" chapNumber="' + i + '">' + i + '</a>');
    };
    $("#nav2").append("</nav>");
};

$(document).on("click", ".rev", function () { searchTerms = ["revelation", this.chapNumber]; handleArtworkFormSubmit(event); });

    // $(document).on("click", this.id, function createChapBtns() {
    //     event.preventDefault();
    //     $("#nav4").remove();
    //     $("#nav3").show(400).append('<nav class="row navbar navbar-light bg-light justify-content-between rounded" id="nav4"><div id="navDiv3>');
    //     for (i = 1; i < this.chapsInBook; i++) {
    //         $("#navDiv3").append('<button class="btn btn-default dropdown-toggle" bibleBook="' + this.id + '" type="button" data-toggle="dropdown" id="' + i + '">' + i + '</button>');
    //     };
    //     $("#nav4").append("</div></nav>");
    // });

    //     $(document).on("click", this.bibleBook, function () { searchTerms = [this.bibleBook, this.id]; handleArtworkFormSubmit(event); });

    function choseGenesis() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 51; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="gen" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#gen", function () { searchTerms = ["genesis", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseExodus() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 41; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Ex" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Ex", function () { searchTerms = ["exodus", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseLeviticus() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 29; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Lev" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Lev", function () { searchTerms = ["leviticus", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseNumbers() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 37; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Num" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Num", function () { searchTerms = ["numbers", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseDeuteronomy() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 35; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Deut" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Deut", function () { searchTerms = ["deuteronomy", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseJoshua() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 25; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Josh" chapNumber="' + i + '">' + i + '</button>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Josh", function () { searchTerms = ["joshua", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseJudges() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 22; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Judge" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Judge", function () { searchTerms = ["judges", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseRuth() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row  navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 5; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Rut" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Rut", function () { searchTerms = ["ruth", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseFirstSamuel() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 32; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="FSam" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#FSam", function () { searchTerms = ["1", "samuel", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseSecondSamuel() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 25; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="SSam" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#SSam", function () { searchTerms = ["2", "samuel", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseFirstKings() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 23; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="FKin" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#FKin", function () { searchTerms = ["1", "kings", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseSecondKings() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 26; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="SKin" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#SKin", function () { searchTerms = ["2", "kings", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseFirstChronicles() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 30; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="FChron" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#FChron", function () { searchTerms = ["1", "chronicles", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseSecondChronicles() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 37; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="SChron" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#SChron", function () { searchTerms = ["2", "chronicles", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseEzra() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 11; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Ezr" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Ezr", function () { searchTerms = ["ezra", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseNehemiah() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 14; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Neh" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Neh", function () { searchTerms = ["nehemiah", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseEsther() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 11; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Esth" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Esth", function () { searchTerms = ["esther", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseJob() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 43; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Jo" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Jo", function () { searchTerms = ["job", this.chapNumber]; handleArtworkFormSubmit(event); });

    function chosePsalms() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 151; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Psa" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Psa", function () { searchTerms = ["psalms", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseProverbs() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 32; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Prov" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Prov", function () { searchTerms = ["proverbs", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseEcclesiastes() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 13; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Eccl" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Eccl", function () { searchTerms = ["ecclesiastes", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseSongofSolomon() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 9; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="SoS" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#SoS", function () { searchTerms = ["song", "of", "solomon", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseIsaiah() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 67; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Isa" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Isa", function () { searchTerms = ["isaiah", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseJeremiah() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 53; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Jer" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Jer", function () { searchTerms = ["jeremiah", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseLamentations() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 6; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Lam" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Lam", function () { searchTerms = ["lamentations", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseEzekiel() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 49; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Eze" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Eze", function () { searchTerms = ["ezekiel", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseDaniel() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 13; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Dan" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Dan", function () { searchTerms = ["daniel", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseHosea() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 15; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Hos" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Hos", function () { searchTerms = ["hosea", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseJoel() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 4; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Joe" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Joe", function () { searchTerms = ["joel", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseAmos() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 10; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Amo" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Amo", function () { searchTerms = ["amos", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseObadiah() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 2; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Oba" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Oba", function () { searchTerms = ["obadiah", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseJonah() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 5; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Jona" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Jona", function () { searchTerms = ["jonah", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseMicah() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 8; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Mic" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Mic", function () { searchTerms = ["micah", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseNahum() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 4; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Nah" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Nah", function () { searchTerms = ["nahum", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseHabakkuk() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 4; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Hab" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Hab", function () { searchTerms = ["habakkuk", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseZephaniah() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 4; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Zeph" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Zeph", function () { searchTerms = ["zephaniah", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseHaggai() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 3; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Hag" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Hag", function () { searchTerms = ["haggai", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseZechariah() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 15; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Zech" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Zech", function () { searchTerms = ["zechariah", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseMalachi() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 5; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Mala" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Mala", function () { searchTerms = ["malachi", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseMatthew() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 29; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Matt" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Matt", function () { searchTerms = ["matthew", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseMark() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 17; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Mar" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Mar", function () { searchTerms = ["mark", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseLuke() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 25; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Luk" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Luk", function () { searchTerms = ["luke", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseJohn() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 22; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Joh" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Joh", function () { searchTerms = ["john", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseActs() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 29; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Act" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Act", function () { searchTerms = ["acts", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseRomans() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 17; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Rom" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Rom", function () { searchTerms = ["romans", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseFirstCorinthians() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 17; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="FCor" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#FCor", function () { searchTerms = ["1", "corinthians", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseSecondCorinthians() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 14; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="SCor" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#SCor", function () { searchTerms = ["2", "corinthians", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseGalatians() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 7; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Gal" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Gal", function () { searchTerms = ["galatians", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseEphesians() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 7; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Eph" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Eph", function () { searchTerms = ["ephesians", this.chapNumber]; handleArtworkFormSubmit(event); });

    function chosePhilippians() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 5; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Phil" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Phil", function () { searchTerms = ["philippians", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseColossians() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 5; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Col" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Col", function () { searchTerms = ["colossians", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseFirstThessalonians() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 6; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="FThes" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#FThes", function () { searchTerms = ["1", "thessalonians", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseSecondThessalonians() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 4; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="SThes" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#SThes", function () { searchTerms = ["2", "thessalonians", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseFirstTimothy() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-light bg-light justify-content-between rounded" id="nav4">');
        for (i = 1; i < 7; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="FTim" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#FTim", function () { searchTerms = ["1", "timothy", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseSecondTimothy() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 5; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="STim" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#STim", function () { searchTerms = ["2", "timothy", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseTitus() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 4; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Tit" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Tit", function () { searchTerms = ["titus", this.chapNumber]; handleArtworkFormSubmit(event); });

    function chosePhilemon() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 2; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="phile" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#phile", function () { searchTerms = ["philemon", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseHebrews() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 14; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="heb" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#heb", function () { searchTerms = ["hebrews", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseJames() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 6; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="jam" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#jam", function () { searchTerms = ["james", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseFirstPeter() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 6; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="FPet" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#FPet", function () { searchTerms = ["1", "peter", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseSecondPeter() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 4; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="SPet" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#SPet", function () { searchTerms = ["2", "peter", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseFirstJohn() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 6; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="FJohn" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#FJohn", function () { searchTerms = ["1", "john", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseSecondJohn() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 2; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="SJohn" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#SJohn", function () { searchTerms = ["2", "john", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseThirdJohn() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 2; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="TJohn" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#TJohn", function () { searchTerms = ["3", "john", this.chapNumber]; handleArtworkFormSubmit(event); });

    function choseJude() {
        event.preventDefault();
        $("#nav4").remove();
        $("#nav3").show(400).append('<nav class="container-fluid row navbar navbar-dark bg-dark justify-content-between rounded" id="nav4">');
        for (i = 1; i < 2; i++) {
            $("#nav3").append('<a class="nav-link" href="#" id="Jud" chapNumber="' + i + '">' + i + '</a>');
        };
        $("#nav3").append("</nav>");
    };

    $(document).on("click", "#Jud", function () { searchTerms = ["jude", this.chapNumber]; handleArtworkFormSubmit(event); });

    function handleArtworkFormSubmit(event) {
        event.preventDefault();
        $("#welcomeDiv").hide();
        $("#welcomeJumbotron").hide();
        $("#afterSearchDiv").empty();
        $("#afterSearchDiv").append('<h3 id="searchTermTitle"></h3><br><div class="row"><div class="col-sm-3 bg-dark" id="scriptureHere"></div><div class="col-sm-9 bg-dark" id="resultsHere"></div></div>');
        document.cookie = "same-site-cookie=SameSite=Lax";
        document.cookie = "cross-site-cookie=bar; SameSite=None; Secure";

        //if search term recognized as Bible book...
        if (searchTerms[0] == "genesis" || searchTerms[0] == "exodus" || searchTerms[0] == "leviticus" || searchTerms[0] == "numbers" || searchTerms[0] == "deuteronomy" || searchTerms[0] == "joshua" || searchTerms[0] == "judges" || searchTerms[0] == "ruth" || searchTerms[0] == "1" || searchTerms[0] == "2" || searchTerms[0] == "ezra" || searchTerms[0] == "nehemiah" || searchTerms[0] == "esther" || searchTerms[0] == "job" || searchTerms[0] == "psalms" || searchTerms[0] == "proverbs" || searchTerms[0] == "ecclesiastes" || searchTerms[0] == "song" || searchTerms[0] == "isaiah" || searchTerms[0] == "jeremiah" || searchTerms[0] == "lamentations" || searchTerms[0] == "ezekiel" || searchTerms[0] == "daniel" || searchTerms[0] == "hosea" || searchTerms[0] == "joel" || searchTerms[0] == "amos" || searchTerms[0] == "obadiah" || searchTerms[0] == "jonah" || searchTerms[0] == "micah" || searchTerms[0] == "nahum" || searchTerms[0] == "habakkuk" || searchTerms[0] == "zephaniah" || searchTerms[0] == "haggai" || searchTerms[0] == "zechariah" || searchTerms[0] == "malachi" || searchTerms[0] == "matthew" || searchTerms[0] == "mark" || searchTerms[0] == "luke" || searchTerms[0] == "john" || searchTerms[0] == "acts" || searchTerms[0] == "romans" || searchTerms[0] == "galatians" || searchTerms[0] == "ephesians" || searchTerms[0] == "philippians" || searchTerms[0] == "colossians" || searchTerms[0] == "titus" || searchTerms[0] == "philemon" || searchTerms[0] == "hebrews" || searchTerms[0] == "james" || searchTerms[0] == "jude" || searchTerms[0] == "revelation" || searchTerms[0] == "1" || searchTerms[0] == "2" || searchTerms[0] == "3") {searchBibleArt() }
        else if (searchTerms[0] == "1" || searchTerms[0] == "2" || searchTerms[0] == "3") {
            searchBibleNumberStart(searchTerms)
        } else if (searchTerms[0] === "song") {
            let newSearchTerms = ["songofsolomon", searchTerms[3]];
            searchTerms = newSearchTerms;
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "gen") {
            searchTerms[0] = "genesis";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "ex") {
            searchTerms[0] = "exodus";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "lev") {
            searchTerms[0] = "leviticus";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "num") {
            searchTerms[0] = "numbers";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "deut") {
            searchTerms[0] = "deuteronomy";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "neh") {
            searchTerms[0] = "nehemiah";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "psa" || searchTerms[0] == "salms" || searchTerms[0] == "psalm") {
            searchTerms[0] = "psalms";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "pro") {
            searchTerms[0] = "proverbs";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "ecc" || searchTerms[0] == "eclesiastes") {
            searchTerms[0] = "ecclesiastes";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "isa") {
            searchTerms[0] = "isaiah";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "jer") {
            searchTerms[0] = "jeremiah";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "lam") {
            searchTerms[0] = "lamentations";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "eze") {
            searchTerms[0] = "ezekiel";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "hos") {
            searchTerms[0] = "hosea";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "oba") {
            searchTerms[0] = "obadiah";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "habakuk") {
            searchTerms[0] = "habakkuk";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "hagai") {
            searchTerms[0] = "haggai";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "zech") {
            searchTerms[0] = "zechariah";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "zeph") {
            searchTerms[0] = "zephaniah";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "malaki" || searchTerms[0] == "mal") {
            searchTerms[0] = "malachi";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "mat") {
            searchTerms[0] = "matthew";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "rom") {
            searchTerms[0] = "romans";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "gal") {
            searchTerms[0] = "galatians";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "eph") {
            searchTerms[0] = "ephesians";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "phil" || searchTerms[0] == "philipians") {
            searchTerms[0] = "philippians";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "col") {
            searchTerms[0] = "colossians";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "heb") {
            searchTerms[0] = "hebrews";
            searchBibleArt(searchTerms)
        } else if (searchTerms[0] === "rev" || searchTerms[0] == "revelations") {
            searchTerms[0] = "revelation";
            searchBibleArt(searchTerms)
        } else {
            searchArtistInstead(searchTerms)
        }
        // Below function is if the input into search bar starts with 1, 2, or 3, as in '1 Samuel...'
        function searchBibleNumberStart() {
            $.get("api/scriptures/" + searchTerms[0] + searchTerms[1] + "/" + searchTerms[2], function (data) {
                $("#scriptureHere").append("<div>" + data.book + " " + data.chapter + " " + data.passage + "</div>");
            })
            $.get("api/artPieces/" + searchTerms[0] + searchTerms[1] +"/" + searchTerms[2], function (data) {
                const artToAdd = [];
                for (let i = 0; i < data.length; i++) {
                    artToAdd.push(createNewPiece(data[i]));
                };
                if (artToAdd === []) {
                } else {
                    $("#searchTermTitle").append(searchTerms.stringify());
                    $("#resultsHere").append(artToAdd);
                }
            });
            $.get("api/videos/" + searchTerms[0] + searchTerms[1] +"/" + searchTerms[2], function (data) {
                const videosToAdd = [];
                for (let i = 0; i < data.length; i++) {
                    videosToAdd.push(createNewVideo(data[i]));
                };
                if (videosToAdd === []) {
                } else {
                    $("#resultsHere").append(videosToAdd);
                }
            });
        };
// this next function searches the Bible with a Biblebook Chapter inputted.
        function searchBibleArt() {
            $.get("api/scriptures/" + searchTerms[0] + "/" + searchTerms[1], function (data) {
                console.log(data);
                $("#scriptureHere").append("<div>" + data.book + " " + data.chapter + " " + data.passage + "</div>");
            })
            $.get("api/artPieces/" + searchTerms[0] + "/" + searchTerms[1], function (data) {
                const artToAdd = [];
                for (let i = 0; i < data.length; i++) {
                    artToAdd.push(createNewPiece(data[i]));
                }
                if (artToAdd === []) {
                } else {
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
                    $("#resultsHere").append(videosToAdd);
                }
            });
        }
    // This next function is for if a person inputs an artist into the search bar instead of a Bible book
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
                    $("#resultsHere").append(videosToAdd);
                }
            })
        };
    };


    function createNewPiece(piece) {
        event.preventDefault();
        return ('<div class="col-sm-3"><h5 class="card-title">' + piece.title + '</h3><img class="img-responsive" src="' + piece.picture + '"><p>Artist: ' + piece.artist + '</p><p>Book: ' + piece.book + '</p><p>Verse: ' + piece.verse + '</p></div>');
    }

    function createNewVideo(piece) {
        event.preventDefault();
        return ('<div class="col-sm-3"><h5 class="card-title">' + piece.title + '</h5><p>Artist: ' + piece.sourceCreator + '</p><p>Book: ' + piece.book + '</p><p>Verse: ' + piece.verse + '</p><div>' + piece.videoEmbed + '</div></div>');
    }

    $(document).on("submit", "#artworkForm", searchBarSubmit);
    var searchTerms;
    function searchBarSubmit() {
        searchTerms = $("#searchArtwork").val().toLowerCase().split(" ");
        handleArtworkFormSubmit(event);
    };

    // $(document).on("click", ".likeButton", function () {
    //     let ArtID = $(this).attr("id");
    //     console.log("The ArtID is..." + ArtID);
    //     let upVotes = $(this).text() + 1;
    //     console.log(upVotes);
    //     const likeButton = $(this);

    //     $.ajax({
    //         url: "/api/artVotes",
    //     method: "PUT",
    //     dataType: "JSON",
    // data: `{
    //     "id": ${ArtID},
    //     "upvotes": ${upVotes}
    // }`}).then(function (data, status) {
    //         likeButton.html("You added your like!");
    //         console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
    //     }).catch(function (err) {
    //         console.log(err);
    //     });
    // });
});