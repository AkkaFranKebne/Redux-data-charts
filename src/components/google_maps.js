//component that takes care of external librady google maps
//do not work with data, so it is a component, not a container

import React, { Component } from 'react';

class GoogleMaps extends Component {
  //do it when component is rendered to the screen
  componentDidMount() {
    //can use google maps as it is attached in index.html
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {lat: this.props.lat, lng: this.props.lon}
    });
  }

  render(){
    <div ref="map"></div>
  }
}

export default GoogleMaps;