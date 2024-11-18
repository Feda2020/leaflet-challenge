// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
let myMap = L.map("map", {
    center: [37.7749, -122.4194], // Center the view on the US.
    zoom: 5
});

// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

let earthquakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the URL
d3.json(earthquakeUrl).then((data) => {
    // Function to style markers based on magnitude and depth
    const getMarkerStyle = (magnitude, depth) => ({
        radius: magnitude * 4, // Marker size proportional to magnitude
        fillColor: depth > 90 ? "#d73027" :
                  depth > 70 ? "#fc8d59" :
                  depth > 50 ? "#fee08b" :
                  depth > 30 ? "#d9ef8b" :
                  depth > 10 ? "#91cf60" : "#1a9850",
        color: "#000", // Black outline
        weight: 0.5,
        opacity: 1,
        fillOpacity: 0.8
    });

    // Add GeoJSON layer with earthquake data
    L.geoJson(data, {
        pointToLayer: (feature, latlng) => L.circleMarker(latlng),
        style: feature => getMarkerStyle(feature.properties.mag, feature.geometry.coordinates[2]),
        onEachFeature: (feature, layer) => {
            layer.bindPopup(
                `<strong>Location:</strong> ${feature.properties.place}<br>
                <strong>Magnitude:</strong> ${feature.properties.mag}<br>
                <strong>Depth:</strong> ${feature.geometry.coordinates[2]} km`
            );
        }
    }).addTo(myMap);

    // Add a legend to the map
    const legend = L.control({ position: "bottomright" });

    legend.onAdd = function () {
        const div = L.DomUtil.create("div", "legend");
        const depths = [-10, 10, 30, 50, 70, 90];
        const colors = ["#1a9850", "#91cf60", "#d9ef8b", "#fee08b", "#fc8d59", "#d73027"];

        div.innerHTML += "<h4>Depth (km)</h4>";
        for (let i = 0; i < depths.length; i++) {
            div.innerHTML +=
                `<i style="background:${colors[i]}"></i> ${
                    depths[i]}${depths[i + 1] ? "&ndash;" + depths[i + 1] : "+"}<br>`;
        }
        return div;
    };

    legend.addTo(myMap);
}).catch(err => console.error("Error fetching data:", err));
