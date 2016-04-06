var map = L.map('map', {scrollWheelZoom:false}).setView([48.072778,-0.77], 7);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


$("body").click(function (evt) {
    evt.preventDefault();
    window.open("http://www.academie-francaise.fr/digital");
});