import React from 'react';
import LandingPage from './landingpage/LandingPage';
// import '../../node_modules/patternfly-react/dist/css/patternfly-react.css';
import '@patternfly/react-core/dist/styles/base.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
