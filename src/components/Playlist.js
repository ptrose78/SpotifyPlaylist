
import React from 'react';

function Playlist({ selectedTracks }) {
  return (
    <div>
      <h2>Playlist</h2>
      <ul>
        {selectedTracks.map((track) => (
          <li key={track.id}>
            {track.name} by {track.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
