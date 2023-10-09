import React from 'react';

function Track({ trackData }) {
  return (
    <div>
        <h3>{trackData.name}</h3>
        <p>{trackData.artist}</p>
        <p>{trackData.album}</p>
        <button>x</button>
    </div>
  );
}

export default Track;