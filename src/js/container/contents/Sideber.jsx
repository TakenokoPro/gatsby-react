import React, { Component } from 'react';
import {GaAds} from '../compornents/index.jsx';

class Sideber extends Component {

  //==========================================================
  // LIFECYCLE
  //==========================================================
  componentDidMount(){

  }

  //==========================================================
  // RENDER
  //==========================================================

  renderProfile() {
    return (
      <div className="_profile">
        <div>プロフィール</div>
        <img src=""/><div>たけのこ</div>
      </div>
    );
  }

  render() {
    const className = this.props.className + " App-sideber";

    return (
      <div className={className}>
        <div className="col-md-12 z-depth-2">{this.renderProfile()}</div>
        <div className="col-md-12"><GaAds/></div>
      </div>
    );
  }

}

export default Sideber;