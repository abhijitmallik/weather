import React, { Component } from 'react';
import Search  from '../containers/search';
import View from '../containers/view';
import * as actions from '../actions/action';

export default class App extends Component{
	componentWillMount(){
		this.props.cityName('newyork');
	}
	render(){
		return(
          <div>
            <Search/>
            <View />
          </div>
		);
	}
}