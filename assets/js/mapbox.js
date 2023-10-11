// This will let you use the .remove() function later on
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
mapboxgl.accessToken = 'pk.eyJ1IjoidGVyeWxpZGEiLCJhIjoiY2xuYWY1YmZrMDNkNzJqbzB1ajg3MmVvdyJ9.M72DGIZ7Lk_bhP_2UKgeaQ';
// This adds the map
var map = new mapboxgl.Map({
    // container id specified in the HTML
    container: 'map',
    // style URL
    style: 'mapbox://styles/mapbox/navigation-preview-day-v2',
    // initial position in [long, lat] format
    center: [25.299487, 53.896655],
    // initial zoom
    zoom: 14,
    scrollZoom: true
});

map.addControl(new MapboxLanguage({
    defaultLanguage: 'ru'
}));
var house = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [25.258533, 53.895100
            ]
        },
        "properties": {
            "address": "Квартира",
            "city": "Лида    ",
            "country": "Беларусь",
            "crossStreet": "Рыбиновского, д.64",

        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [25.308506, 53.896533
            ]
        },
        "properties": {
            "address": "Квартира",
            "city": "Лида    ",
            "country": "Беларусь",
            "crossStreet": "Набережная, д.2",
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [25.258766, 53.896894
            ]
        },
        "properties": {
            "address": "Квартира",
            "city": "Лида    ",
            "country": "Беларусь",
            "crossStreet": "Тухачевского, д.81",
        }
    },
    ]
};
// This adds the data to the map
map.on('load', function (e) {
    // This is where your '.addLayer()' used to be, instead add only the source without styling a layer
    map.addSource("places", {
        "type": "geojson",
        "data": house
    });
    // Initialize the list
    buildLocationList(house);
});
// This is where your interactions with the symbol layer used to be
// Now you have interactions with DOM markers instead
house.features.forEach(function (marker, i) {
    // Create an img element for the marker
    var el = document.createElement('div');
    el.id = "marker-" + i;
    el.className = 'marker';
    // Add markers to the map at all points
    new mapboxgl.Marker(el, {
        offset: [0, -23]
    })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
    el.addEventListener('click', function (e) {
        // 1. Fly to the point
        flyToStore(marker);
        // 2. Close all other popups and display popup for clicked store
        createPopUp(marker);
        // 3. Highlight listing in sidebar (and remove highlight for all other listings)
        var activeItem = document.getElementsByClassName('active');
        e.stopPropagation();
        if (activeItem[0]) {
            activeItem[0].classList.remove('active');
        }
        var listing = document.getElementById('listing-' + i);
        listing.classList.add('active');
    });
});

function flyToStore(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 15
    });
}

function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();
    var popup = new mapboxgl.Popup({
        closeOnClick: false
    })
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML('<h3>' + currentFeature.properties.address + '</h3>' +
            '<h4>' + currentFeature.properties.city + '</h4>' + currentFeature.properties.crossStreet)
        .addTo(map);
}

function buildLocationList(data) {
    for (i = 0; i < data.features.length; i++) {
        var currentFeature = data.features[i];
        var prop = currentFeature.properties;
        var listings = document.getElementById('listings');
        var listing = listings.appendChild(document.createElement('div'));
        listing.className = 'item';
        listing.id = "listing-" + i;
        var link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.dataPosition = i;
        link.innerHTML = prop.address;
        var details = listing.appendChild(document.createElement('div'));
        details.innerHTML = prop.city;
        details.innerHTML += ' &middot; ' + prop.crossStreet;
        

        link.addEventListener('click', function (e) {
            // Update the currentFeature to the store associated with the clicked link
            var clickedListing = data.features[this.dataPosition];
            // 1. Fly to the point
            flyToStore(clickedListing);
            // 2. Close all other popups and display popup for clicked store
            createPopUp(clickedListing);
            // 3. Highlight listing in sidebar (and remove highlight for all other listings)
            var activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
                activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');
        });
    }
}