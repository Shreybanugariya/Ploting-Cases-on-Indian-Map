function updateMap()
{
  fetch("India.json")
  .then(Response => Response.json())
  .then(Response => {
    console.log(Response.data)
    Response.data.forEach(element => {
      Latitude = element.Latitude;
      Longitude = element.Longitude;

      cases =  element.Deaths;
       color = `rgb(${cases}, 0, 0)`;

      // Infect = element.Infected;
      //   color = `rgb(0, 0, ${Infect})`;

      // Recov = element.Recovered;
      //   color =  `rgb(0,${Infect},0 )`
      
      // Marking on MAP
       new mapboxgl.Marker({
        draggable: false,
        color: color
        })
        .setLngLat([Longitude, Latitude])
        .addTo(map);
    });
  })
}

updateMap();