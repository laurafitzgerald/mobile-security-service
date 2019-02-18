import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import LandingPage from './landingpage/LandingPage';
// import '../../node_modules/patternfly-react/dist/css/patternfly-react.css';
import '@patternfly/react-core/dist/styles/base.css';

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/overview" component={LandingPage} />>
            {/* Default redirect */}
            <Redirect to="/overview" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
