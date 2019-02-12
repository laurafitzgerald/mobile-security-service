import React, { Component } from 'react';
import LandingPage from './components/LandingPage'
import '../node_modules/patternfly-react/dist/css/patternfly-react.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
