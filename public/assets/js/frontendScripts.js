$(document).ready(function () {

    $("#scriptureHere").hide();
    $("#resultsHere").hide();
    $("#nav2").hide();
    $("#nav3").hide();
    $("#nav4").hide();
    //Menu bar handling
    $(document).on("click", "#OT", makeOldTestamentNav);
    function makeOldTestamentNav() {
        event.preventDefault();
        $("#nav2").empty().hide();
        $("#nav3").empty().hide();
        $("#nav4").empty().hide();
        $("#nav2").show(400).append('<div id="booksButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="PentateuchNav">Pentateuch</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="HistoricalBooksNav">Historical Books</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="WisdomNav">Wisdom</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="MajorProphetsNav">Major Prophets</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="MinorProphetsNav">Minor Prophets</button></div>');
        $(document).on("click", "#PentateuchNav", chosePenteteuch);
        $(document).on("click", "#HistoricalBooksNav", choseHistoricalBooks);
        $(document).on("click", "#WisdomBooksNav", choseWisdomBooks);
        $(document).on("click", "#MajorProphetsNav", choseMajorProphetsBooks);
        $(document).on("click", "#MinorProphetsNav", choseMinorProphetsBooks);
        $(document).on("click", "#NT", makeNewTestamentNav);
    };
    function makeNewTestamentNav() {
        event.preventDefault();
        $("#nav2").empty().hide();
        $("#nav3").empty().hide();
        $("#nav4").empty().hide();
        $("#nav2").show(400).append('<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="GospelsNav">Gospels/Acts</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="PaulineNav">Pauline Epistles</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="EpistlesNav">General Epistles</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="RevelationNav">Revelation</button></nav>');
        $(document).on("click", "#GospelsNav", choseGospelsBooks);
        $(document).on("click", "#PaulineEpistlesNav", chosePaulineBooks);
        $(document).on("click", "#GeneralEpistlesNav", choseGeneralBooks);
        $(document).on("click", "#RevelationNav", choseRevelationBook);
    };
   
    function chosePenteteuch() {
        event.preventDefault();
        $("#nav3").empty().hide();
        $("#nav4").empty().hide();
        $("#nav3").show(400).append('<div id="pentateuchButtons"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Genesis">Genesis</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Exodus">Exodus</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Leviticus">Leviticus</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Numbers">Numbers</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Deuteronomy">Deuteronomy</button></div>');
        $(document).on("click", "#Genesis", choseGenesis);
    };
    $(document).on("click", "#Exodus" || "#Deuteronomy", comingSoon);
    function comingSoon() {
        $("#scriptureHere").hide();
        $("#resultsHere").empty();
        $("#resultsHere").append("<h2>Coming Soon!</h2>");
    }

    function choseHistoricalBooks() {
        event.preventDefault();
        $("#nav3").empty().hide();
        $("#nav4").empty().hide();
        $("#nav3").show(400).append('<div id="booksButtons">Chapters being added soon<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Joshua">Joshua</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Judges">Judges</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Ruth">Ruth</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstSamuel">1 Samuel</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondSamuel">2 Samuel</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstKings">1 Kings</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondKings">2 Kings</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstChronicles">1 Chronicles</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondChronicles">2 Chronicles</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Ezra">Ezra</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Nehemiah">Nehemiah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Esther">Esther</button></div>');
    };
    
    function choseWisdomBooks() {
        event.preventDefault();
        $("#nav3").empty().hide();
        $("#nav4").empty().hide();
        $("#nav3").show(400).append('<div id="wisdomButtons">Chapters being added soon<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Job">Job</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Psalms">Psalms</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Proverbs">Proverbs</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Ecclesiastes">Ecclesiastes</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SongOfSolomon">Song of Solomon</button></div>');
    }
 
    function choseMajorProphetsBooks() {
        event.preventDefault();
        $("#nav3").empty().hide();
        $("#nav4").empty().hide();
        $("#nav3").show(400).append('<div id="majorProphetsButtons">Chapters being added soon<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Isaiah">Isaiah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Jeremiah">Jeremiah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Lamentations">Lamentations</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Ezekiel">Ezekiel</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Daniel">Daniel</button></div>');
    };

    function choseMinorProphetsBooks() {
        event.preventDefault();
        $("#nav3").empty().hide();
        $("#nav4").empty().hide();
        $("#nav3").show(400).append('<div id="minorProphetsButtons">Chapters being added soon<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Hosea">Hosea</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Joel">Joel</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Amos">Amos</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Obadiah">Obadiah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Jonah">Jonah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Micah">Micah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Nahum">Nahum</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Habakkuk">Habakkuk</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Zephaniah">Zephaniah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Haggai">Haggai</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Zechariah">Zechariah</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Malachi">Malachi</button></div>');
    };
    
    function choseGospelsBooks() {
        event.preventDefault();
        $("#nav3").empty().hide();
        $("#nav4").empty().hide();
        $("#nav3").show(400).append('<div id="GospelsButtons">Chapters being added soon<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Matthew">Matthew</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Mark">Mark</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Luke">Luke</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="John">John</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Acts">Acts</button></div>');
    };
  
    function chosePaulineBooks() {
        event.preventDefault();
        $("#nav3").empty().hide();
        $("#nav4").empty().hide();
        $("#nav3").show(400).append('<div id="PaulineButtons">Chapters being added soon<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Romans">Romans</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstCorinthians">1 Corinthians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondCorinthians">2 Corinthians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Galatians">Galatians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Ephesians">Ephesians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Philippians">Philippians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Colossians">Colossians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstThessalonians">1 Thessalonians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondThessalonians">2 Thessalonians</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstTimothy">1 Timothy</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondTimothy">2 Timothy</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Titus">Titus</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Philemon">Philemon</button></div>');
    };

    function choseGeneralBooks() {
        event.preventDefault();
        $("#nav3").empty().hide();
        $("#nav4").empty().hide();
        $("#nav3").show(400).append('<div id="GeneralEpistlesButtons">Chapters being added soon<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Hebrews">Hebrews</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="James">James</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstPeter">1 Peter</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondPeter">2 Peter</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="FirstJohn">1 John</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="SecondJohn">2 John</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="ThirdJohn">3 John</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Jude">Jude</button></div>');
    };
   
    function choseRevelationBook() {
        event.preventDefault();
        $("#nav3").empty().hide();
        $("#nav4").empty().hide();
        $("#nav3").show(400).append('<div>Chapters being added soon<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Revelation">Revelation</button></div>');
    };
   
    function choseGenesis() {
        event.preventDefault();
        $("#nav4").empty().hide();
        $("#nav4").show(400).append('<div><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen1">1</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen2" onclick="genSubmit(2)">2</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen3" onclick="genSubmit("3")">3</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen4" onclick="genSubmit("4")>4</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen5" onclick="genSubmit("5")>5</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen6" onclick="genSubmit("6")>6</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen7" onclick="genSubmit("7")>7</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen8" onclick="genSubmit("8")>8</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen9" onclick="genSubmit("9")>9</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen10" onclick="genSubmit("10")>10</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen11" onclick="genSubmit("11")>11</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen12" onclick="genSubmit("12")>12</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen13" onclick="genSubmit("13")>13</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen14" onclick="genSubmit("14")>14</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen15" onclick="genSubmit("15")>15</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen16" onclick="genSubmit("16")>16</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen17" onclick="genSubmit("17")>17</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen18" onclick="genSubmit("18")>18</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen19" onclick="genSubmit("19")>19</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen20" onclick="genSubmit("20")>20</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen21" onclick="genSubmit("21")>21</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen22" onclick="genSubmit("22")>22</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen23" onclick="genSubmit("23")>23</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen24" onclick="genSubmit("24")>24</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen25" onclick="genSubmit("25")>25</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen26" onclick="genSubmit("26")>26</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen27" onclick="genSubmit("27")>27</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen28" onclick="genSubmit("28")>28</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen29" onclick="genSubmit("29")>29</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen30" onclick="genSubmit("30")>30</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen31" onclick="genSubmit("31")>31</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen32" onclick="genSubmit("32")>32</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen33" onclick="genSubmit("33")>33</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen34" onclick="genSubmit("34")>34</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen35" onclick="genSubmit("35")>35</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen36" onclick="genSubmit("36")>36</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen37" onclick="genSubmit("37")>37</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen38" onclick="genSubmit("38")>38</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen39" onclick="genSubmit("39")>39</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen40" onclick="genSubmit("40")>40</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen41" onclick="genSubmit("41")>41</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen42" onclick="genSubmit("42")>42</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen43" onclick="genSubmit("43")>43</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen44" onclick="genSubmit("44")>44</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen45" onclick="genSubmit("45")>45</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen46" onclick="genSubmit("46")>46</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen47" onclick="genSubmit("47")>47</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen48" onclick="genSubmit("48")>48</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen49" onclick="genSubmit("49")>49</button><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="Gen50" onclick="genSubmit("50")>50</button></div>');
    };

    $(document).on("click", "#Gen1", function() {
        searchTerms = ["genesis", "1"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen2", function() {
        searchTerms = ["genesis", "2"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen3", function() {
        searchTerms = ["genesis", "3"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen4", function() {
        searchTerms = ["genesis", "4"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen5", function() {
        searchTerms = ["genesis", "5"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen6", function() {
        searchTerms = ["genesis", "6"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen7", function() {
        searchTerms = ["genesis", "7"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen8", function() {
        searchTerms = ["genesis", "8"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen9", function() {
        searchTerms = ["genesis", "9"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen10", function() {
        searchTerms = ["genesis", "10"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen11", function() {
        searchTerms = ["genesis", "11"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen12", function() {
        searchTerms = ["genesis", "12"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen13", function() {
        searchTerms = ["genesis", "13"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen14", function() {
        searchTerms = ["genesis", "14"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen15", function() {
        searchTerms = ["genesis", "15"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen16", function() {
        searchTerms = ["genesis", "16"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen17", function() {
        searchTerms = ["genesis", "17"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen18", function() {
        searchTerms = ["genesis", "18"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen19", function() {
        searchTerms = ["genesis", "19"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen20", function() {
        searchTerms = ["genesis", "20"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen21", function() {
        searchTerms = ["genesis", "21"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen22", function() {
        searchTerms = ["genesis", "22"];
        handleArtworkFormSubmit(event);
    });
    $(document).on("click", "#Gen23", function() {
        searchTerms = ["genesis", "23"];
        handleArtworkFormSubmit(event);
    });
    $(document).on("click", "#Gen24", function() {
        searchTerms = ["genesis", "24"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen25", function() {
        searchTerms = ["genesis", "25"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen26", function() {
        searchTerms = ["genesis", "26"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen27", function() {
        searchTerms = ["genesis", "27"];
        handleArtworkFormSubmit(event);
    });
    $(document).on("click", "#Gen28", function() {
        searchTerms = ["genesis", "28"];
        handleArtworkFormSubmit(event);
    });
    $(document).on("click", "#Gen29", function() {
        searchTerms = ["genesis", "29"];
        handleArtworkFormSubmit(event);
    });
    $(document).on("click", "#Gen30", function() {
        searchTerms = ["genesis", "30"];
        handleArtworkFormSubmit(event);
    });
    $(document).on("click", "#Gen31", function() {
        searchTerms = ["genesis", "26"];
        handleArtworkFormSubmit(event);
    });
    $(document).on("click", "#Gen32", function() {
        searchTerms = ["genesis", "26"];
        handleArtworkFormSubmit(event);
    });
    $(document).on("click", "#Gen33", function() {
        searchTerms = ["genesis", "33"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen34", function() {
        searchTerms = ["genesis", "34"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen35", function() {
        searchTerms = ["genesis", "35"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen36", function() {
        searchTerms = ["genesis", "36"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen37", function() {
        searchTerms = ["genesis", "37"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen38", function() {
        searchTerms = ["genesis", "38"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen39", function() {
        searchTerms = ["genesis", "39"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen40", function() {
        searchTerms = ["genesis", "40"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen41", function() {
        searchTerms = ["genesis", "41"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen42", function() {
        searchTerms = ["genesis", "42"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen43", function() {
        searchTerms = ["genesis", "43"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen44", function() {
        searchTerms = ["genesis", "44"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen45", function() {
        searchTerms = ["genesis", "45"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen46", function() {
        searchTerms = ["genesis", "46"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen47", function() {
        searchTerms = ["genesis", "47"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen48", function() {
        searchTerms = ["genesis", "48"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen49", function() {
        searchTerms = ["genesis", "49"];
        handleArtworkFormSubmit(event);
    });

    $(document).on("click", "#Gen50", function() {
        searchTerms = ["genesis", "50"];
        handleArtworkFormSubmit(event);
    });

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

        } else {
            // This next chunk is if the first search word was not a Bible book
            $("#scriptureHere").empty();
            $("#scriptureHere").hide();
            $.get("api/artistArtwork/" + searchTerms[0], function (data) {
                const artToAdd = [];
                for (let i = 0; i < data.length; i++) {
                    artToAdd.push(createNewPiece(data[i]));
                }
                $("#resultsHere").append("<div class='card'><h1>Art pieces for this artist include: </h1></div>");
                $("#resultsHere").append(artToAdd);
            })

            $.get("api/artistVideos/" + searchTerms[0], function (data) {
                const videosToAdd = [];
                for (let i = 0; i < data.length; i++) {
                    videosToAdd.push(createNewVideo(data[i]));
                }
                $("#resultsHere").append("<div class='card'><h1>Videos for this artist include: </h1></div>");
                $("#resultsHere").append(videosToAdd);
            })
        };
        function createNewPiece(piece) {
            event.preventDefault();
            return('<div class="jumbotron jumbotron-fluid shadow p-2" id="resultsHere" style="width: 45vw;"><h3>'  + piece.title + '</h3><img src="' + piece.picture + '" class="card-img-top img-fluid"><h6>' + piece.artist + '</h6><h6>Verse: ' + piece.verse + '</h6><h6>Add a like? This piece currently has </h6><button class="likeButton" id="' + piece.id + '">' + piece.upvotes + '</button></div>');
        }

        function createNewVideo(piece) {
            event.preventDefault();
            return('<div class="jumbotron"><h5 class="card-title">' + piece.title + '</h5><div>Artist: ' + piece.sourceCreator + '</div><div>Verse: ' + piece.verse + '</div><div>' + piece.videoEmbed + '</div></div>');
        }
    };

    $(document).on("submit", "#artworkForm", searchBarSubmit);
    var searchTerms;
    function searchBarSubmit() {
        searchTerms = $("#searchArtwork").val().toLowerCase().split(" ");
        handleArtworkFormSubmit(event);
    };

    $(document).on("click", ".likeButton", function() {
        let ArtID = $(this.id);
        console.log("The ArtID is..." + ArtID);
        let upVotes = $(this).val();
        upVotes = parseInt(upVotes) + 1;
        upVotes = upVotes.toString();
        console.log(upVotes);
        $.ajax({
            type: 'PUT',
            url: '/api/artVotes/' + ArtID + "/" + upVotes,
            contentType: 'application/json',
            data: {id: this.id, upvotes: upVotes}
        }).done(function () {
            console.log('SUCCESS');
        })
    });
  });