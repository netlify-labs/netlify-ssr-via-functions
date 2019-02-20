import React from 'react';
import { withSiteData } from 'react-static';

export default withSiteData(() => (
  <div style={{ textAlign: 'center' }}>
    <p className="App-intro">
      <h2>Choose an example</h2>
    </p>

    <div className="content">
      <a className="link" href="/characters">
        See Marvel Characters
      </a>
    </div>
  </div>
));
