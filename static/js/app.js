function tester() {
    console.log("deanna");
}

function AboutMeText() {
    setTimeout(function () {
        document.getElementById("text1btndots").style.display = "none";
        $("#text1btn").fadeIn("fast", function () {});
    }, 2100);

    setTimeout(function () {
        $("#text2btndots").fadeIn("fast", function () { });
        $("#deejtextpic").fadeIn("fast", function () { });

        setTimeout(function () {
            document.getElementById("text2btndots").style.display = "none";
            $("#text2btn").fadeIn("fast", function () { });
        }, 2100);
    }, 2900);

    setTimeout(function () {
        $("#text3btndots").fadeIn("fast", function () { });
    }, 6000);

    
    
}

window.onload = function () {
    AboutMeText();
};
