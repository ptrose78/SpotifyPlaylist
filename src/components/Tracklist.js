import React from 'react';
import Track from './Track';

function Tracklist({ tracks }) {
  return (
    <div>
        <ul>
            {tracks.map((track) => (
                <li> 
                    <Track key={track.id} trackData={track} />
                    <button>+</button>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default Tracklist;  