import React from 'react';


function Tracklist({ tracks }) {
  return (
    <div>
      {tracks.map((track) => (
        <Track key={track.id} trackData={track} />
      ))}
    </div>
  );
}

export default Tracklist;