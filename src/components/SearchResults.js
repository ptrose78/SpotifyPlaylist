import React from 'react';
import Tracklist from './Tracklist';

function SearchResults({ searchQuery, tracks }) {
  return (
    <div>
      <h2>Search Results for "{searchQuery}"</h2>
      <Tracklist tracks={tracks} />
      <Playlist selectedTracks={selectedTracks} />
    </div>
  );
}

export default SearchResults;