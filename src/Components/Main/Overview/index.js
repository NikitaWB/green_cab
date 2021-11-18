import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { Link } from 'react-router-dom';
import { Button } from '../../../GlobalStyle';

function Overview() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '60vh',
    latitude: 59.234332396,
    longitude: 18.100999596,
    zoom: 13,
  });

  return (
    <div>
      <ReactMapGL
        mapboxApiAccessToken={
          'pk.eyJ1IjoibmlraXRhYnV5b25kbyIsImEiOiJja3Y2aXZxM20wNThmMm9xdWV5NHNqYWptIn0.d48wPJak6j_XYmBP-udUzw'
        }
        mapStyle='mapbox://styles/mapbox/dark-v9'
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      />
      <br />
      <p>Din gröna taxi anländer om ca 5 min</p>
      <br />
      <p>Beräknad ankomsttid till slutdestination 17:59</p>
      <p>Trevlig resa!</p>
      <br />
      <Link to='/confirm'>
        <Button>Avboka resa</Button>
      </Link>
    </div>
  );
}

export default Overview;
