import React, { Component } from 'react';
//import Header from '../../containers/Header';
import AppGrid from '../../containers/AppGrid';
import PF4Table from './PF4Table';
import Header from './Header';

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="landingPage">
        <Header />
        <PF4Table />
      </div>
    );
  }
}

export default LandingPage;
