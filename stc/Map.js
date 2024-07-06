import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const Map = () => {
  //const [data, setData] = useState(null);
    const setState = '';
    const [data, state, setData] = useState("");

  useEffect(() => {
    // Replace 'YourAPIEndpoint' and 'YourAPIKey' with actual values
    fetch('YourAPIEndpoint', {
      headers: {
        'Authorization': `Bearer YourAPIKey`
      }
    })
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error(error));
  }, []);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {data && data.map((point, index) => (
        <Marker key={index} position={[point.lat, point.lon]}>
          <Popup>
            Salinity: {point.salinity}<br />
            Wind Speed: {point.windSpeed}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
/*
import React, { useEffect } from 'react';
import ee from '@google/earthengine';

// Initialize the Earth Engine library.
/*ee.initialize();

function Map() {
  useEffect(() => {
    // Create a map centered at (0, 0).
    const map = new ee.Map({
      center: [0, 0],
      zoom: 2
    });

    // Access the salinity data.
    const salinityData = ee.ImageCollection('HYCOM/sea_temp_salinity');

    // Select the salinity band.
    const salinityBand = salinityData.select('salinity_0');

    // Add the salinity data to the map.
    map.addLayer(salinityBand, {min: 30, max: 40, palette: ['blue', 'green', 'red']}, 'Salinity');

    // Add the map to the div with the id 'map'.
    map.setTarget('map');
  }, []);

  return <div id="map" style={{width: '100%', height: '600px'}}></div>;
}

export default Map;
*/