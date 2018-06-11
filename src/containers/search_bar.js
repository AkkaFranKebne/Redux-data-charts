import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather} from "../actions/index";

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: '' };

    //for changing the context of 'this'
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event){
    event.preventDefault();
    //here will be data fetcher here
    this.props.fetchWeather(this.state.term);
    //and clear the input
    this.setState({ term: ''});
  }

  render(){
    return (
      <div>
        <form
          onSubmit={this.onFormSubmit}
          className='input-group'>
          <input
            placeholder='Get forecast for city in US'
            className='form-control'
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

//null in the first argument is about no app state here
export default  connect(null, mapDispatchToProps)(SearchBar);