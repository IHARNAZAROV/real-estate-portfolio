// This will let you use the .remove() function later on
if (!("remove" in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}
mapboxgl.accessToken =
  "pk.eyJ1IjoidGVyeWxpZGEiLCJhIjoiY2xuYWY1YmZrMDNkNzJqbzB1ajg3MmVvdyJ9.M72DGIZ7Lk_bhP_2UKgeaQ";
// This adds the map
let map = new mapboxgl.Map({
  // container id specified in the HTML
  container: "map",
  // style URL
  style: "mapbox://styles/mapbox/navigation-preview-day-v2",
  // initial position in [long, lat] format
  center: [25.299487, 53.896655],
  // initial zoom
  zoom: 14,
  scrollZoom: true,
});

map.addControl(
  new MapboxLanguage({
    defaultLanguage: "ru",
  })
);
let house = {
  type: "FeatureCollection",
  features: [
   /*  {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [25.812560,53.591422],
      },
      properties: {
        address: "1-этажный дом",
        city: "Новогрудок    ",
        country: "Беларусь",
        crossStreet: "Будённого",
      },
    }, */
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [25.392813, 53.995556],
      },
      properties: {
        address: "3-комнатная квартира",
        city: "Дворище    ",
        country: "Беларусь",
        crossStreet: "Луговая, д.1",
      },
    },
{
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [25.268351, 53.889147],
      },
      properties: {
        address: "2-комнатная квартира",
        city: "Лида    ",
        country: "Беларусь",
        crossStreet: "Невского, д.44",
      },
    }, 
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [24.900267, 53.578764],
      },
      properties: {
        address: "Дом с участком",
        city: " Желудокский сельсовет    ",
        country: "Беларусь",
        crossStreet: "деревня Купры",
      },
    }, 
 {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [25.252855,53.905870 ],
      },
      properties: {
        address: "2-комнатная квартира",
        city: "Лида    ",
        country: "Беларусь",
        crossStreet: "Гастелло, д.69",
      },
    }, 
 {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [25.430650, 53.670708],
      },
      properties: {
        address: "3-комнатная квартира",
        city: "Селец    ",
        country: "Беларусь",
        crossStreet: "Молодежная",
      },
    }, 

/*  {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [25.340675, 53.875082],
      },
      properties: {
        address: "2-комнатная квартира",
        city: "Лида",
        country: "Беларусь",
        crossStreet: "Южный городок, д.14",
      },
    }, */
  {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [25.843435, 53.590593],
      },
      properties: {
        address: "1-этажный дом",
        city: "Новогрудок",
        country: "Беларусь",
        crossStreet: "Островского",
      },
    }, 
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [26.150901, 53.570429],
      },
      properties: {
        address: "1-этажный дом",
        city: "Кореличи",
        country: "Беларусь",
        crossStreet: "Янки Купалы",
      },
    },

 /*    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [25.301373, 53.897578],
      },
      properties: {
        address: "3-комнатная квартира",
        city: "Лида    ",
        country: "Беларусь",
        crossStreet: "Фрунзе, д. 2",
      },
    }, */
/*     {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [25.31139, 53.898109],
      },
      properties: {
        address: "1-комнатная квартира",
        city: "Лида    ",
        country: "Беларусь",
        crossStreet: "Игнатова, д. 31",
      },
    }, */

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [25.282482, 53.876563],
      },
      properties: {
        address: "2-комнатная квартира",
        city: "Лида    ",
        country: "Беларусь",
        crossStreet: "Машерова, д.9 к.1",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [25.261614, 53.888621],
      },
      properties: {
        address: "Производственная база",
        city: "Лида    ",
        country: "Беларусь",
        crossStreet: "1-й переулок Александра Невского",
      },
    },
     {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [25.440549,53.748039],
      },
      properties: {
        address: "Дом с участком",
        city: "СТ Химик",
        country: "Беларусь",
        crossStreet: "Речная",
      },
    }, 
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [25.83879, 53.594821],
      },
      properties: {
        address: "1-этажный дом",
        city: "Новогрудок    ",
        country: "Беларусь",
        crossStreet: "Свердлова",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [25.339192, 53.875703],
      },
      properties: {
        address: "2-комнатная квартира",
        city: "Лида    ",
        country: "Беларусь",
        crossStreet: "Южный городок, д.15",
      },
    },
    /*     {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [25.343621, 53.875825],
      },
      properties: {
        address: "2-комнатная квартира",
        city: "Лида    ",
        country: "Беларусь",
        crossStreet: "Южный Городок, 11",
      },
    }, */
  ],
};
// This adds the data to the map
map.on("load", function (e) {
  // This is where your '.addLayer()' used to be, instead add only the source without styling a layer
  map.addSource("places", {
    type: "geojson",
    data: house,
  });
  // Initialize the list
  buildLocationList(house);
});
// This is where your interactions with the symbol layer used to be
// Now you have interactions with DOM markers instead
house.features.forEach(function (marker, i) {
  // Create an img element for the marker
  let el = document.createElement("div");
  el.id = "marker-" + i;
  el.className = "marker";
  // Add markers to the map at all points
  new mapboxgl.Marker(el, {
    offset: [0, -23],
  })
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
  el.addEventListener("click", function (e) {
    // 1. Fly to the point
    flyToStore(marker);
    // 2. Close all other popups and display popup for clicked store
    createPopUp(marker);
    // 3. Highlight listing in sidebar (and remove highlight for all other listings)
    let activeItem = document.getElementsByClassName("active");
    e.stopPropagation();
    if (activeItem[0]) {
      activeItem[0].classList.remove("active");
    }
    let listing = document.getElementById("listing-" + i);
    listing.classList.add("active");
  });
});

function flyToStore(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 15,
  });
}

function createPopUp(currentFeature) {
  let popUps = document.getElementsByClassName("mapboxgl-popup");
  if (popUps[0]) popUps[0].remove();
  let popup = new mapboxgl.Popup({
    closeOnClick: false,
  })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML(
      "<h3>" +
        currentFeature.properties.address +
        "</h3>" +
        "<h4>" +
        currentFeature.properties.city +
        "</h4>" +
        currentFeature.properties.crossStreet
    )
    .addTo(map);
}

function buildLocationList(data) {
  for (i = 0; i < data.features.length; i++) {
    let currentFeature = data.features[i];
    let prop = currentFeature.properties;
    let listings = document.getElementById("listings");
    let listing = listings.appendChild(document.createElement("div"));
    listing.className = "item";
    listing.id = "listing-" + i;
    let link = listing.appendChild(document.createElement("a"));
    link.href = "#";
    link.className = "title";
    link.dataPosition = i;
    link.innerHTML = prop.address;
    let details = listing.appendChild(document.createElement("div"));
    details.innerHTML = prop.city;
    details.innerHTML += " &middot; " + prop.crossStreet;

    link.addEventListener("click", function (e) {
      // Update the currentFeature to the store associated with the clicked link
      let clickedListing = data.features[this.dataPosition];
      // 1. Fly to the point
      flyToStore(clickedListing);
      // 2. Close all other popups and display popup for clicked store
      createPopUp(clickedListing);
      // 3. Highlight listing in sidebar (and remove highlight for all other listings)
      let activeItem = document.getElementsByClassName("active");
      if (activeItem[0]) {
        activeItem[0].classList.remove("active");
      }
      this.parentNode.classList.add("active");
    });
  }
}
