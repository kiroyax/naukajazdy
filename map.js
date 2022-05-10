var mapOptions = {
  center: [51.070138, 17.097219],
  zoom: 18,
};

var map = new L.map("map", mapOptions);

var layer = new L.TileLayer(
  "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
);
map.addLayer(layer);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([51.070138, 17.097219])
  .addTo(map)
  .bindPopup("Jesteśmy tutaj")
  .openPopup();
