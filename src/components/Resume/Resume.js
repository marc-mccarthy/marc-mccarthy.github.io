import React from 'react'
import { Page, MyResume } from './Resume.styles.js';

function Resume() {

  return (
    <Page>
      <MyResume
        title="Marc's Resume"
        src="https://drive.google.com/file/d/19vnaNpPTX0noVyrGa2YxGYnwSifMUF2C/preview"
        width="640"
        height="480"
        allow="autoplay">
      </MyResume>
    </Page>
  );
}

export default Resume;
