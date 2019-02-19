import * as netlifyLogo from './netlify-logo-black.svg';
// import * as expressLogo from './express.png';
import React from 'react';
import { Root, Routes } from 'react-static';
// import { Link } from '@reach/router';
import './App.css';
import FancyDiv from '@components/FancyDiv';

function App() {
  return (
    <Root>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div className="content">
        
      </div> */}

      <div className="App">
        <FancyDiv>
          <header className="App-header">
            <div className="logo-wrapper">
              <img src={netlifyLogo} className="netlify-logo" alt="logo" />
              {/* <span className="and">+</span>
              <img src={expressLogo} className="express-logo" alt="logo" /> */}
            </div>
            <h1 className="App-title">
              Static + Serverless Server Side Rendering
            </h1>
          </header>
        </FancyDiv>

        <Routes />
      </div>
    </Root>
  );
}

export default App;
