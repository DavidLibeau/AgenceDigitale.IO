"use strict";
var redirection = true;

var map = L.map('map', {scrollWheelZoom:false}).setView([48.072778,-0.77], 7);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

$("nav>i").click(function () {
    if ($("nav>div").css("visibility") == "hidden") {
        $("nav>div").css("visibility", "visible");
        $(this).removeClass("fa-bars").addClass("fa-times");
    } else {
        $("nav>div").css("visibility", "");
        $(this).removeClass("fa-times").addClass("fa-bars");
    }
});

$("body").click(function (evt) {
    evt.preventDefault();
    window.open("http://www.academie-francaise.fr/digital");
}).contextmenu(function (evt) {
    if (redirection == true) {
        evt.preventDefault();
        var r = confirm("Arrêter la redirection ?");
        if (r == true) {
            $("body").off("click");
            redirection = false;
        }
    }
});