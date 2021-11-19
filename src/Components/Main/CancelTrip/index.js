import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import Glass2 from './Glass2';

function CancelTrip() {

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100vh',
    latitude: 59.234332396,
    longitude: 18.100999596,
    zoom: 13,
  });

  return (
    <div>
      <Glass2 />
      <ReactMapGL
        mapboxApiAccessToken={
          'pk.eyJ1IjoibmlraXRhYnV5b25kbyIsImEiOiJja3Y2aXZxM20wNThmMm9xdWV5NHNqYWptIn0.d48wPJak6j_XYmBP-udUzw'
        }
        mapStyle='mapbox://styles/mapbox/dark-v9'
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      />
    </div>
  );
}

export default CancelTrip;
