import React, { Component } from 'react';
import { connect }  from 'react-redux';


class WeatherList extends Component {
  renderWeather(cityData){
    return(
      <tr key={ cityData.city.id  }>
        <td >
          { cityData.city.name }
        </td>
      </tr>
    )
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