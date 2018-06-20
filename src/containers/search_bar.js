//containers are components that use data

import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { bindActionCreators } from 'redux';

//import action that collects the needed data
import { fetchWeather} from "../actions/index";

class SearchBar extends Component {
  constructor(props){
    super(props);
    //for initial state of state props
    this.state = { term: '' };

    //for changing the context of 'this' (necessary always when function uses this inside function body)
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  //when user writes the input, set a new input to props.state
  onInputChange(event){
    //to change the state you need to use setState
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event){
    event.preventDefault();
    //a specific function from actions is called - function that fetches data from ajax
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

//function that adds function from action to props of this container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

//null in the first argument is about no app state here, we only want to add function from actions to props
export default  connect(null, mapDispatchToProps)(SearchBar);