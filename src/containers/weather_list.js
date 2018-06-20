//containers are components that use data

import React, { Component } from 'react';
import { connect }  from 'react-redux';

//import components that are used in this container
import Chart from '../components/chart';
import GoogleMaps from "../components/google_maps";


class WeatherList extends Component {

  //function that draws the weather
  renderWeather(cityData){
    // take data from ajax to use in sparkline
    const temp = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const { lat, lon } = cityData.city.coord;
    //use this data as params in Chart component:
    return(
      <tr key={ cityData.city.id  }>
        <td ><GoogleMaps lon={lon} lat={lat}/></td>
        <td ><Chart data={temp} color="orange" units="K"/></td>
        <td ><Chart data={pressure} color="blue" units="hpa"/></td>
        <td ><Chart data={humidity} color="green" units="%"/></td>
      </tr>
    );
  }

  render(){
    return (
      <table className='table table-hover'>
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) /* do this function on every element on weather array*/ }
        </tbody>
      </table>
    )
  }
}

//makes data from weather reducer avaliable as this container props
function mapStateToProps({ weather }) {
  return { weather }; //{weather: weather}
}

export default  connect(mapStateToProps)(WeatherList);