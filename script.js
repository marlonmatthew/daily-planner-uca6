$(document).ready(function () {

    // grabbing the text areas
    var textFor24 = document.querySelector("#textCol24");
    var textFor1 = document.querySelector("#textCol1");
    var textFor2 = document.querySelector("#textCol2");
    var textFor3 = document.querySelector("#textCol3");
    var textFor4 = document.querySelector("#textCol4");
    var textFor5 = document.querySelector("#textCol5");
    var textFor6 = document.querySelector("#textCol6");
    var textFor7 = document.querySelector("#textCol7");
    var textFor8 = document.querySelector("#textCol8");
    var textFor9 = document.querySelector("#textCol9");
    var textFor10 = document.querySelector("#textCol10");
    var textFor11 = document.querySelector("#textCol11");
    var textFor12 = document.querySelector("#textCol12");
    var textFor13 = document.querySelector("#textCol13");
    var textFor14 = document.querySelector("#textCol14");
    var textFor15 = document.querySelector("#textCol15");
    var textFor16 = document.querySelector("#textCol16");
    var textFor17 = document.querySelector("#textCol17");
    var textFor18 = document.querySelector("#textCol18");
    var textFor19 = document.querySelector("#textCol19");
    var textFor20 = document.querySelector("#textCol20");
    var textFor21 = document.querySelector("#textCol21");
    var textFor22 = document.querySelector("#textCol22");
    var textFor23 = document.querySelector("#textCol23");

    // global variables for locked or unlocked status
    var status24;
    var status1;
    var status2;
    var status3;
    var status4;
    var status4;
    var status5;
    var status6;
    var status7;
    var status8;
    var status9;
    var status10;
    var status11;
    var status12;
    var status13;
    var status14;
    var status15;
    var status16;
    var status17;
    var status18;
    var status19;
    var status20;
    var status21;
    var status22;
    var status23;

    // setting Luxon date and time information
    var DateTime = luxon.DateTime;
    var dt = DateTime.local();

    // display the current date and time in the jumbotron
    $("#currentDay").append(dt.toLocaleString(DateTime.DATETIME_MED));

    //call the functions
    renderStored();
    renderColors();
    clicks();

    // this function checks if there are any text areas stored in local storage already
    // if there are any text areas in local storage, display them and change the icon and status to locked
    // otherwise, set to unlocked

    function renderStored() {

        if (localStorage.getItem("text24") !== null) {
            textFor24.append(localStorage.getItem("text24"));
            $("#saveCol24").empty();
            $("#saveCol24").html(`<i class="fas fa-lock"></i>`);
            status24 = "locked";
        } else {
            status24 = "unlocked";
        }

        if (localStorage.getItem("text1") !== null) {
            textFor1.append(localStorage.getItem("text1"));
            $("#saveCol1").empty();
            $("#saveCol1").html(`<i class="fas fa-lock"></i>`);
            status1 = "locked";
        } else {
            status1 = "unlocked";
        }

        if (localStorage.getItem("text2") !== null) {
            textFor2.append(localStorage.getItem("text2"));
            $("#saveCol2").empty();
            $("#saveCol2").html(`<i class="fas fa-lock"></i>`);
            status2 = "locked";
        } else {
            status2 = "unlocked";
        }

        if (localStorage.getItem("text3") !== null) {
            textFor3.append(localStorage.getItem("text3"));
            $("#saveCol3").empty();
            $("#saveCol3").html(`<i class="fas fa-lock"></i>`);
            status3 = "locked";
        } else {
            status3 = "unlocked";
        }

        if (localStorage.getItem("text4") !== null) {
            textFor4.append(localStorage.getItem("text4"));
            $("#saveCol4").empty();
            $("#saveCol4").html(`<i class="fas fa-lock"></i>`);
            status4 = "locked";
        } else {
            status4 = "unlocked";
        }

        if (localStorage.getItem("text5") !== null) {
            textFor5.append(localStorage.getItem("text5"));
            $("#saveCol5").empty();
            $("#saveCol5").html(`<i class="fas fa-lock"></i>`);
            status5 = "locked";
        } else {
            status5 = "unlocked";
        }

        if (localStorage.getItem("text6") !== null) {
            textFor6.append(localStorage.getItem("text6"));
            $("#saveCol6").empty();
            $("#saveCol6").html(`<i class="fas fa-lock"></i>`);
            status6 = "locked";
        } else {
            status6 = "unlocked";
        }

        if (localStorage.getItem("text7") !== null) {
            textFor7.append(localStorage.getItem("text7"));
            $("#saveCol7").empty();
            $("#saveCol7").html(`<i class="fas fa-lock"></i>`);
            status7 = "locked";
        } else {
            status7 = "unlocked";
        }

        if (localStorage.getItem("text8") !== null) {
            textFor8.append(localStorage.getItem("text8"));
            $("#saveCol8").empty();
            $("#saveCol8").html(`<i class="fas fa-lock"></i>`);
            status8 = "locked";
        } else {
            status8 = "unlocked";
        }

        if (localStorage.getItem("text9") !== null) {
            textFor9.append(localStorage.getItem("text9"));
            $("#saveCol9").empty();
            $("#saveCol9").html(`<i class="fas fa-lock"></i>`);
            status9 = "locked";
        } else {
            status9 = "unlocked";
        }

        if (localStorage.getItem("text10") !== null) {
            textFor10.append(localStorage.getItem("text10"));
            $("#saveCol10").empty();
            $("#saveCol10").html(`<i class="fas fa-lock"></i>`);
            status10 = "locked";
        } else {
            status10 = "unlocked";
        }

        if (localStorage.getItem("text11") !== null) {
            textFor11.append(localStorage.getItem("text11"));
            $("#saveCol11").empty();
            $("#saveCol11").html(`<i class="fas fa-lock"></i>`);
            status11 = "locked";
        } else {
            status11 = "unlocked";
        }

        if (localStorage.getItem("text12") !== null) {
            textFor12.append(localStorage.getItem("text12"));
            $("#saveCol12").empty();
            $("#saveCol12").html(`<i class="fas fa-lock"></i>`);
            status12 = "locked";
        } else {
            status12 = "unlocked";
        }

        if (localStorage.getItem("text13") !== null) {
            textFor13.append(localStorage.getItem("text13"));
            $("#saveCol13").empty();
            $("#saveCol13").html(`<i class="fas fa-lock"></i>`);
            status13 = "locked";
        } else {
            status13 = "unlocked";
        }

        if (localStorage.getItem("text14") !== null) {
            textFor14.append(localStorage.getItem("text14"));
            $("#saveCol14").empty();
            $("#saveCol14").html(`<i class="fas fa-lock"></i>`);
            status14 = "locked";
        } else {
            status14 = "unlocked";
        }

        if (localStorage.getItem("text15") !== null) {
            textFor15.append(localStorage.getItem("text15"));
            $("#saveCol15").empty();
            $("#saveCol15").html(`<i class="fas fa-lock"></i>`);
            status15 = "locked";
        } else {
            status15 = "unlocked";
        }

        if (localStorage.getItem("text16") !== null) {
            textFor16.append(localStorage.getItem("text16"));
            $("#saveCol16").empty();
            $("#saveCol16").html(`<i class="fas fa-lock"></i>`);
            status16 = "locked";
        } else {
            status16 = "unlocked";
        }

        if (localStorage.getItem("text17") !== null) {
            textFor17.append(localStorage.getItem("text17"));
            $("#saveCol17").empty();
            $("#saveCol17").html(`<i class="fas fa-lock"></i>`);
            status17 = "locked";
        } else {
            status17 = "unlocked";
        }

        if (localStorage.getItem("text18") !== null) {
            textFor18.append(localStorage.getItem("text18"));
            $("#saveCol18").empty();
            $("#saveCol18").html(`<i class="fas fa-lock"></i>`);
            status18 = "locked";
        } else {
            status18 = "unlocked";
        }

        if (localStorage.getItem("text19") !== null) {
            textFor19.append(localStorage.getItem("text19"));
            $("#saveCol19").empty();
            $("#saveCol19").html(`<i class="fas fa-lock"></i>`);
            status19 = "locked";
        } else {
            status19 = "unlocked";
        }

        if (localStorage.getItem("text20") !== null) {
            textFor20.append(localStorage.getItem("text20"));
            $("#saveCol20").empty();
            $("#saveCol20").html(`<i class="fas fa-lock"></i>`);
            status20 = "locked";
        } else {
            status20 = "unlocked";
        }

        if (localStorage.getItem("text21") !== null) {
            textFor21.append(localStorage.getItem("text21"));
            $("#saveCol21").empty();
            $("#saveCol21").html(`<i class="fas fa-lock"></i>`);
            status21 = "locked";
        } else {
            status21 = "unlocked";
        }

        if (localStorage.getItem("text22") !== null) {
            textFor22.append(localStorage.getItem("text22"));
            $("#saveCol22").empty();
            $("#saveCol22").html(`<i class="fas fa-lock"></i>`);
            status22 = "locked";
        } else {
            status22 = "unlocked";
        }

        if (localStorage.getItem("text23") !== null) {
            textFor23.append(localStorage.getItem("text23"));
            $("#saveCol23").empty();
            $("#saveCol23").html(`<i class="fas fa-lock"></i>`);
            status23 = "locked";
        } else {
            status23 = "unlocked";
        }

    };

    // this function will set the background color of the text area to black if the hour is already passed
    // if the hour is the current hour, the background color will be red
    function renderColors() {
        if (dt.hour > 0) {
            $("#textCol24").css("background-color", "black");
            $("#textCol24").css("color", "white");
        } else if (dt.hour === 0) {
            $("#textCol24").css("background-color", "red");
        }

        if (dt.hour > 1) {
            $("#textCol1").css("background-color", "black");
            $("#textCol1").css("color", "white");
        } else if (dt.hour === 1) {
            $("#textCol1").css("background-color", "red");
        }

        if (dt.hour > 2) {
            $("#textCol2").css("background-color", "black");
            $("#textCol2").css("color", "white");
        } else if (dt.hour === 2) {
            $("#textCol2").css("background-color", "red");
        }

        if (dt.hour > 3) {
            $("#textCol3").css("background-color", "black");
            $("#textCol3").css("color", "white");
        } else if (dt.hour === 3) {
            $("#textCol3").css("background-color", "red");
        }

        if (dt.hour > 4) {
            $("#textCol4").css("background-color", "black");
            $("#textCol4").css("color", "white");
        } else if (dt.hour === 4) {
            $("#textCol4").css("background-color", "red");
        }

        if (dt.hour > 5) {
            $("#textCol5").css("background-color", "black");
            $("#textCol5").css("color", "white");
        } else if (dt.hour === 5) {
            $("#textCol5").css("background-color", "red");
        }

        if (dt.hour > 6) {
            $("#textCol6").css("background-color", "black");
            $("#textCol6").css("color", "white");
        } else if (dt.hour === 6) {
            $("#textCol6").css("background-color", "red");
        }

        if (dt.hour > 7) {
            $("#textCol7").css("background-color", "black");
            $("#textCol7").css("color", "white");
        } else if (dt.hour === 7) {
            $("#textCol7").css("background-color", "red");
        }

        if (dt.hour > 8) {
            $("#textCol8").css("background-color", "black");
            $("#textCol8").css("color", "white");
        } else if (dt.hour === 8) {
            $("#textCol8").css("background-color", "red");
        }

        if (dt.hour > 9) {
            $("#textCol9").css("background-color", "black");
            $("#textCol9").css("color", "white");
        } else if (dt.hour === 9) {
            $("#textCol9").css("background-color", "red");
        }

        if (dt.hour > 10) {
            $("#textCol10").css("background-color", "black");
            $("#textCol10").css("color", "white");
        } else if (dt.hour === 10) {
            $("#textCol10").css("background-color", "red");
        }

        if (dt.hour > 11) {
            $("#textCol11").css("background-color", "black");
            $("#textCol11").css("color", "white");
        } else if (dt.hour === 11) {
            $("#textCol11").css("background-color", "red");
        }

        if (dt.hour > 12) {
            $("#textCol12").css("background-color", "black");
            $("#textCol12").css("color", "white");
        } else if (dt.hour === 12) {
            $("#textCol12").css("background-color", "red");
        }

        if (dt.hour > 13) {
            $("#textCol13").css("background-color", "black");
            $("#textCol13").css("color", "white");
        } else if (dt.hour === 13) {
            $("#textCol13").css("background-color", "red");
        }

        if (dt.hour > 14) {
            $("#textCol14").css("background-color", "black");
            $("#textCol14").css("color", "white");
        } else if (dt.hour === 14) {
            $("#textCol14").css("background-color", "red");
        }

        if (dt.hour > 15) {
            $("#textCol15").css("background-color", "black");
            $("#textCol15").css("color", "white");
        } else if (dt.hour === 15) {
            $("#textCol15").css("background-color", "red");
        }

        if (dt.hour > 16) {
            $("#textCol16").css("background-color", "black");
            $("#textCol16").css("color", "white");
        } else if (dt.hour === 16) {
            $("#textCol16").css("background-color", "red");
        }

        if (dt.hour > 17) {
            $("#textCol17").css("background-color", "black");
            $("#textCol17").css("color", "white");
        } else if (dt.hour === 17) {
            $("#textCol17").css("background-color", "red");
        }

        if (dt.hour > 18) {
            $("#textCol18").css("background-color", "black");
            $("#textCol18").css("color", "white");
        } else if (dt.hour === 18) {
            $("#textCol18").css("background-color", "red");
        }

        if (dt.hour > 19) {
            $("#textCol19").css("background-color", "black");
            $("#textCol19").css("color", "white");
        } else if (dt.hour === 19) {
            $("#textCol19").css("background-color", "red");
        }

        if (dt.hour > 20) {
            $("#textCol20").css("background-color", "black");
            $("#textCol20").css("color", "white");
        } else if (dt.hour === 20) {
            $("#textCol20").css("background-color", "red");
        }

        if (dt.hour > 21) {
            $("#textCol21").css("background-color", "black");
            $("#textCol21").css("color", "white");
        } else if (dt.hour === 21) {
            $("#textCol21").css("background-color", "red");
        }

        if (dt.hour > 22) {
            $("#textCol22").css("background-color", "black");
            $("#textCol22").css("color", "white");
        } else if (dt.hour === 22) {
            $("#textCol22").css("background-color", "red");
        }

        if (dt.hour > 23) {
            $("#textCol23").css("background-color", "black");
            $("#textCol23").css("color", "white");
        } else if (dt.hour === 23) {
            $("#textCol23").css("background-color", "red");
        }
    };

    // this function handles clicks
    // clicking the unlock icon will save the text in the text area to local storage
    // it will also change the icon to a locked icon, and set the status to locked
    // clicking the lock icon will remove the text in the text area from local storage
    // the text will still be displayed in the text area, however
    // the icon and status will change to unlocked
    function clicks() {

        $("#saveCol24").on("click", function () {
            if (status24 == "unlocked") {
                $("#saveCol24").empty();
                $("#saveCol24").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text24", textFor24.value);
                status24 = "locked";
            } else {
                $("#saveCol24").empty();
                $("#saveCol24").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text24");
                status24 = "unlocked";
            }
        });

        $("#saveCol1").on("click", function () {
            if (status1 == "unlocked") {
                $("#saveCol1").empty();
                $("#saveCol1").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text1", textFor1.value);
                status1 = "locked";
            } else {
                $("#saveCol1").empty();
                $("#saveCol1").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text1");
                status1 = "unlocked";
            }
        });

        $("#saveCol2").on("click", function () {
            if (status2 == "unlocked") {
                $("#saveCol2").empty();
                $("#saveCol2").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text2", textFor2.value);
                status2 = "locked";
            } else {
                $("#saveCol2").empty();
                $("#saveCol2").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text2");
                status2 = "unlocked";
            }
        });

        $("#saveCol3").on("click", function () {
            if (status3 == "unlocked") {
                $("#saveCol3").empty();
                $("#saveCol3").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text3", textFor3.value);
                status3 = "locked";
            } else {
                $("#saveCol3").empty();
                $("#saveCol3").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text3");
                status3 = "unlocked";
            }
        });

        $("#saveCol4").on("click", function () {
            if (status4 == "unlocked") {
                $("#saveCol4").empty();
                $("#saveCol4").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text4", textFor4.value);
                status4 = "locked";
            } else {
                $("#saveCol4").empty();
                $("#saveCol4").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text4");
                status4 = "unlocked";
            }
        });

        $("#saveCol5").on("click", function () {
            if (status5 == "unlocked") {
                $("#saveCol5").empty();
                $("#saveCol5").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text5", textFor5.value);
                status5 = "locked";
            } else {
                $("#saveCol5").empty();
                $("#saveCol5").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text5");
                status5 = "unlocked";
            }
        });

        $("#saveCol6").on("click", function () {
            if (status6 == "unlocked") {
                $("#saveCol6").empty();
                $("#saveCol6").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text6", textFor6.value);
                status6 = "locked";
            } else {
                $("#saveCol6").empty();
                $("#saveCol6").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text6");
                status6 = "unlocked";
            }
        });

        $("#saveCol7").on("click", function () {
            if (status7 == "unlocked") {
                $("#saveCol7").empty();
                $("#saveCol7").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text7", textFor7.value);
                status7 = "locked";
            } else {
                $("#saveCol7").empty();
                $("#saveCol7").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text7");
                status7 = "unlocked";
            }
        });

        $("#saveCol8").on("click", function () {
            if (status8 == "unlocked") {
                $("#saveCol8").empty();
                $("#saveCol8").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text8", textFor8.value);
                status8 = "locked";
            } else {
                $("#saveCol8").empty();
                $("#saveCol8").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text8");
                status8 = "unlocked";
            }
        });

        $("#saveCol9").on("click", function () {
            if (status9 == "unlocked") {
                $("#saveCol9").empty();
                $("#saveCol9").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text9", textFor9.value);
                status9 = "locked";
            } else {
                $("#saveCol9").empty();
                $("#saveCol9").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text9");
                status9 = "unlocked";
            }
        });

        $("#saveCol10").on("click", function () {
            if (status10 == "unlocked") {
                $("#saveCol10").empty();
                $("#saveCol10").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text10", textFor10.value);
                status10 = "locked";
            } else {
                $("#saveCol10").empty();
                $("#saveCol10").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text10");
                status10 = "unlocked";
            }
        });

        $("#saveCol11").on("click", function () {
            if (status11 == "unlocked") {
                $("#saveCol11").empty();
                $("#saveCol11").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text11", textFor11.value);
                status11 = "locked";
            } else {
                $("#saveCol11").empty();
                $("#saveCol11").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text11");
                status11 = "unlocked";
            }
        });

        $("#saveCol12").on("click", function () {
            if (status12 == "unlocked") {
                $("#saveCol12").empty();
                $("#saveCol12").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text12", textFor12.value);
                status12 = "locked";
            } else {
                $("#saveCol12").empty();
                $("#saveCol12").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text12");
                status12 = "unlocked";
            }
        });

        $("#saveCol13").on("click", function () {
            if (status13 == "unlocked") {
                $("#saveCol13").empty();
                $("#saveCol13").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text13", textFor13.value);
                status13 = "locked";
            } else {
                $("#saveCol13").empty();
                $("#saveCol13").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text13");
                status13 = "unlocked";
            }
        });

        $("#saveCol14").on("click", function () {
            if (status14 == "unlocked") {
                $("#saveCol14").empty();
                $("#saveCol14").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text14", textFor14.value);
                status14 = "locked";
            } else {
                $("#saveCol14").empty();
                $("#saveCol14").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text14");
                status14 = "unlocked";
            }
        });

        $("#saveCol15").on("click", function () {
            if (status15 == "unlocked") {
                $("#saveCol15").empty();
                $("#saveCol15").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text15", textFor15.value);
                status15 = "locked";
            } else {
                $("#saveCol15").empty();
                $("#saveCol15").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text15");
                status15 = "unlocked";
            }
        });

        $("#saveCol16").on("click", function () {
            if (status16 == "unlocked") {
                $("#saveCol16").empty();
                $("#saveCol16").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text16", textFor16.value);
                status16 = "locked";
            } else {
                $("#saveCol16").empty();
                $("#saveCol16").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text16");
                status16 = "unlocked";
            }
        });

        $("#saveCol17").on("click", function () {
            if (status17 == "unlocked") {
                $("#saveCol17").empty();
                $("#saveCol17").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text17", textFor17.value);
                status17 = "locked";
            } else {
                $("#saveCol17").empty();
                $("#saveCol17").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text17");
                status17 = "unlocked";
            }
        });

        $("#saveCol18").on("click", function () {
            if (status18 == "unlocked") {
                $("#saveCol18").empty();
                $("#saveCol18").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text18", textFor18.value);
                status18 = "locked";
            } else {
                $("#saveCol18").empty();
                $("#saveCol18").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text18");
                status18 = "unlocked";
            }
        });

        $("#saveCol19").on("click", function () {
            if (status19 == "unlocked") {
                $("#saveCol19").empty();
                $("#saveCol19").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text19", textFor19.value);
                status19 = "locked";
            } else {
                $("#saveCol19").empty();
                $("#saveCol19").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text19");
                status19 = "unlocked";
            }
        });

        $("#saveCol20").on("click", function () {
            if (status20 == "unlocked") {
                $("#saveCol20").empty();
                $("#saveCol20").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text20", textFor20.value);
                status20 = "locked";
            } else {
                $("#saveCol20").empty();
                $("#saveCol20").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text20");
                status20 = "unlocked";
            }
        });

        $("#saveCol21").on("click", function () {
            if (status21 == "unlocked") {
                $("#saveCol21").empty();
                $("#saveCol21").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text21", textFor21.value);
                status21 = "locked";
            } else {
                $("#saveCol21").empty();
                $("#saveCol21").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text21");
                status21 = "unlocked";
            }
        });

        $("#saveCol22").on("click", function () {
            if (status22 == "unlocked") {
                $("#saveCol22").empty();
                $("#saveCol22").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text22", textFor22.value);
                status22 = "locked";
            } else {
                $("#saveCol22").empty();
                $("#saveCol22").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text22");
                status22 = "unlocked";
            }
        });

        $("#saveCol23").on("click", function () {
            if (status23 == "unlocked") {
                $("#saveCol23").empty();
                $("#saveCol23").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text23", textFor23.value);
                status23 = "locked";
            } else {
                $("#saveCol23").empty();
                $("#saveCol23").html(`<i class="fas fa-unlock-alt"></i>`);
                localStorage.removeItem("text23");
                status23 = "unlocked";
            }
        });

        // this will clear the entire local storage, empty all text areas and set all icons and status to unlocked
        $("#clear").on("click", function () {
            localStorage.clear();
            $("#saveCol24").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor24.value = "";
            status24 = "unlocked";
            $("#saveCol1").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor1.value = "";
            status1 = "unlocked";
            $("#saveCol2").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor2.value = "";
            status2 = "unlocked";
            $("#saveCol3").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor3.value = "";
            status3 = "unlocked";
            $("#saveCol4").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor4.value = ""; $("#textCol4").empty();
            status4 = "unlocked";
            $("#saveCol5").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor5.value = "";
            status5 = "unlocked";
            $("#saveCol6").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor6.value = "";
            status6 = "unlocked";
            $("#saveCol7").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor7.value = "";
            status7 = "unlocked";
            $("#saveCol8").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor8.value = "";
            status8 = "unlocked";
            $("#saveCol9").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor9.value = "";
            status9 = "unlocked";
            $("#saveCol10").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor10.value = "";
            status10 = "unlocked";
            $("#saveCol11").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor11.value = "";
            status11 = "unlocked";
            $("#saveCol12").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor12.value = "";
            status12 = "unlocked";
            $("#saveCol13").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor13.value = "";
            status13 = "unlocked";
            $("#saveCol14").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor14.value = "";
            status14 = "unlocked";
            $("#saveCol15").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor15.value = "";
            status15 = "unlocked";
            $("#saveCol16").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor16.value = "";
            status16 = "unlocked";
            $("#saveCol17").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor17.value = "";
            status17 = "unlocked";
            $("#saveCol18").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor18.value = "";
            status18 = "unlocked";
            $("#saveCol19").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor19.value = "";
            status19 = "unlocked";
            $("#saveCol20").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor20.value = "";
            status20 = "unlocked";
            $("#saveCol21").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor21.value = "";
            status21 = "unlocked";
            $("#saveCol22").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor22.value = "";
            status22 = "unlocked";
            $("#saveCol23").html(`<i class="fas fa-unlock-alt"></i>`);
            textFor23.value = "";
            status23 = "unlocked";
        });

        // this will check if any text areas contain text and save those to local storage and set icons and status to locked with one click
        $("#saveAll").on("click", function () {

            if (textFor24.value !== "") {
                $("#saveCol24").empty();
                $("#saveCol24").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text24", textFor24.value);
                status24 = "locked";
            }

            if (textFor1.value !== "") {
                $("#saveCol1").empty();
                $("#saveCol1").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text1", textFor1.value);
                status1 = "locked";
            }

            if (textFor2.value !== "") {
                $("#saveCol2").empty();
                $("#saveCol2").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text2", textFor2.value);
                status2 = "locked";
            }

            if (textFor3.value !== "") {
                $("#saveCol3").empty();
                $("#saveCol3").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text3", textFor3.value);
                status3 = "locked";
            }

            if (textFor4.value !== "") {
                $("#saveCol4").empty();
                $("#saveCol4").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text4", textFor4.value);
                status4 = "locked";
            }

            if (textFor5.value !== "") {
                $("#saveCol5").empty();
                $("#saveCol5").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text5", textFor5.value);
                status5 = "locked";
            }

            if (textFor6.value !== "") {
                $("#saveCol6").empty();
                $("#saveCol6").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text6", textFor6.value);
                status6 = "locked";
            }

            if (textFor7.value !== "") {
                $("#saveCol7").empty();
                $("#saveCol7").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text7", textFor7.value);
                status7 = "locked";
            }

            if (textFor8.value !== "") {
                $("#saveCol8").empty();
                $("#saveCol8").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text8", textFor8.value);
                status8 = "locked";
            }

            if (textFor9.value !== "") {
                $("#saveCol9").empty();
                $("#saveCol9").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text9", textFor9.value);
                status9 = "locked";
            }

            if (textFor10.value !== "") {
                $("#saveCol10").empty();
                $("#saveCol10").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text10", textFor10.value);
                status10 = "locked";
            }

            if (textFor11.value !== "") {
                $("#saveCol11").empty();
                $("#saveCol11").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text11", textFor11.value);
                status11 = "locked";
            }

            if (textFor12.value !== "") {
                $("#saveCol12").empty();
                $("#saveCol12").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text12", textFor12.value);
                status12 = "locked";
            }

            if (textFor13.value !== "") {
                $("#saveCol13").empty();
                $("#saveCol13").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text13", textFor13.value);
                status13 = "locked";
            }

            if (textFor14.value !== "") {
                $("#saveCol14").empty();
                $("#saveCol14").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text14", textFor14.value);
                status14 = "locked";
            }

            if (textFor15.value !== "") {
                $("#saveCol15").empty();
                $("#saveCol15").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text15", textFor15.value);
                status15 = "locked";
            }

            if (textFor16.value !== "") {
                $("#saveCol16").empty();
                $("#saveCol16").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text16", textFor16.value);
                status16 = "locked";
            }

            if (textFor17.value !== "") {
                $("#saveCol17").empty();
                $("#saveCol17").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text17", textFor17.value);
                status17 = "locked";
            }

            if (textFor18.value !== "") {
                $("#saveCol18").empty();
                $("#saveCol18").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text18", textFor18.value);
                status18 = "locked";
            }

            if (textFor19.value !== "") {
                $("#saveCol19").empty();
                $("#saveCol19").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text19", textFor19.value);
                status19 = "locked";
            }

            if (textFor20.value !== "") {
                $("#saveCol20").empty();
                $("#saveCol20").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text20", textFor20.value);
                status20 = "locked";
            }

            if (textFor21.value !== "") {
                $("#saveCol21").empty();
                $("#saveCol21").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text21", textFor21.value);
                status21 = "locked";
            }

            if (textFor22.value !== "") {
                $("#saveCol22").empty();
                $("#saveCol22").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text22", textFor22.value);
                status22 = "locked";
            }

            if (textFor23.value !== "") {
                $("#saveCol23").empty();
                $("#saveCol23").html(`<i class="fas fa-lock"></i>`);
                localStorage.setItem("text23", textFor23.value);
                status23 = "locked";
            }
        });


    };

});