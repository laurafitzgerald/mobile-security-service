import React, { Component } from 'react';
import Header from '../containers/Header';

class AppDetailedView extends Component {
  constructor () {
    super();
    this.state = {};
  }

  render () {
    return (
      <div className="appdetialedview">
        <Header />
      </div>
    );
  }
}

export default AppDetailedView;
