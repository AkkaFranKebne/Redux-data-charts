import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesBars} from 'react-sparklines';


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
        <td >
          <Sparklines height={120} width={180} data={temp}>
            <SparklinesLine color="blue"></SparklinesLine>
          </Sparklines>
        </td>
        <td >
          <Sparklines height={120} width={180} data={pressure}>
            <SparklinesLine color="red"></SparklinesLine>
          </Sparklines>
        </td>
        <td >
          <Sparklines height={120} width={180} data={humidity}>
            <SparklinesLine color="yellow"></SparklinesLine>
          </Sparklines>
        </td>
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