/* global google */
import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

function OceanMap() {
  const [salinityUrl, setSalinityUrl] = useState('');

  useEffect(() => {
    const fetchSalinityData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/get-salinity-url');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSalinityUrl(data.url);
        console.log('Salinity URL fetched:', data.url);
      } catch (error) {
        console.error('Error fetching salinity URL:', error);
      }
    };

    fetchSalinityData();
  }, []);

  useEffect(() => {
    if (!salinityUrl) return;

    console.log('Initializing Google Maps with salinity URL:', salinityUrl);

    // Initialize Google Maps
    const loader = new Loader({
      apiKey: 'AIzaSyCRH20ExQXy0axz48gx-67oWtEYhdzYej0',
      version: 'weekly',
    });

    loader.load().then(() => {
      const googleMap = new google.maps.Map(document.getElementById('google-map'), {
        center: { lat: 0, lng: 0 },
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
      });

      const overlay = new google.maps.ImageMapType({
        getTileUrl: (coord, zoom) => {
          const url = salinityUrl.replace('{x}', coord.x).replace('{y}', coord.y).replace('{z}', zoom);
          console.log('Fetching tile:', url);
          return url;
        },
        tileSize: new google.maps.Size(256, 256),
        isPng: true,
        opacity: 0.7,
        maxZoom: 10,
        minZoom: 0,
        name: 'Salinity Overlay',
        wrapX: false,
        wrapY: false
      });

      googleMap.overlayMapTypes.push(overlay);

      googleMap.addListener('tilesloaded', () => {
        console.log('Tiles loaded');
      });
      googleMap.addListener('tileserror', (e) => {
        console.error('Error loading salinity tiles:', e);
      });
    }).catch(error => {
      console.error('Error loading Google Maps:', error);
    });
  }, [salinityUrl]);

  return (
    <div className="bg-white bg-opacity-50 p-6 rounded-md space-y-6 text-cyan-950">
      <p className="mb-4">
        This map displays global variations in ocean salinity.  Salinity, the amount of dissolved salts in seawater, plays a crucial role in ocean circulation, marine ecosystems, and climate patterns. Explore the map to observe how salinity changes across different regions and latitudes.
      </p>
      <div id="google-map" style={{ width: '100%', height: '1024px' }}></div>
    </div>
  );
}

export default OceanMap;
