import React from 'react';

import OpeningGIF from './OpeningGIF'
import OpeningScript from './OpeningScript'
import OpeningNotes from './OpeningNotes'

function SelectedOpeningContainer() {
  return (
  <div class="selected-openings-container-div">
    <OpeningGIF />
    <OpeningScript />
    <OpeningNotes />
  </div>
  );
}

export default SelectedOpeningContainer; 