import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { cityName } from '../actions/action';
import { connect } from 'react-redux';
class Search extends Component{
	constructor(props){
		super(props);
		this.state = {'value':''};
		this.enterCity = this.enterCity.bind(this);
		this.callWeatherData = this.callWeatherData.bind(this);
	}
	render(){
		return(<div>Enter City<input type='text' value={this.state.value} onChange={(event) => {this.enterCity(event)}}/><button type="submit" value="Enter" onClick={()=>{this.callWeatherData()}}></button></div>);
	}
	enterCity(event){
		this.setState({'value':event.target.value});
	}
	callWeatherData(){
		this.props.cityName(this.state.value);
		this.setState({'value':''});
	}
}

function bindActionWithClass(dispatch){
   return bindActionCreators({cityName},dispatch);
}

export default connect(null,bindActionWithClass)(Search);


