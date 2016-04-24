"use strict";
var redirection = true;

var map = L.map('map', {scrollWheelZoom:false}).setView([48.072778,-0.77], 7);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


$("nav>i").click(function () { //Responsive Menu
    if ($("nav>div").css("visibility") == "hidden") {
        $("nav>div").css("visibility", "visible");
        $(this).removeClass("fa-bars").addClass("fa-times");
    } else {
        $("nav>div").css("visibility", "");
        $(this).removeClass("fa-times").addClass("fa-bars");
    }
});


$("body").click(function (evt) { //Redirection
    evt.preventDefault();
    window.open("http://www.academie-francaise.fr/digital");
}).contextmenu(function (evt) { //Right click to stop redirection
    if (redirection == true) {
        evt.preventDefault();
        var reponseAlert = confirm("Arrêter la redirection ?");
        if (reponseAlert == true) {
            $("body").off("click");
            redirection = false;
        }
    }
});


$("[href]").click(function (evt) { //Desactivate redirection when it's an external link
    if ($(this).attr("href")[0] != "#") {
        evt.stopPropagation();
    }
});