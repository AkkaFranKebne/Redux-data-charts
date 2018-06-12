import React, { Component } from 'react';
import { connect }  from 'react-redux';

import Chart from '../components/chart';


class WeatherList extends Component {
  renderWeather(cityData){
    // data for sparkline library
    const temp = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    return(
      <tr key={ cityData.city.id  }>
        <td >
          { cityData.city.name }
        </td>
        <Chart data={temp} color="orange"/>
        <Chart data={pressure} color="blue"/>
        <Chart data={humidity} color="green"/>
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

function mapStateToProps({ weather }) {
  return { weather }; //{weather: weather}
}

//null in the first argument is about no app state here
export default  connect(mapStateToProps)(WeatherList);