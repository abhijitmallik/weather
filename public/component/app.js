import React, { Component } from 'react';
import Search  from '../containers/search';
import ViewChat from '../containers/view';
import * as actions from '../actions/action';
import '../app.css';

export default class App extends Component{
	render(){
		return(
          <div className='main-container'>
	          <div className = 'sub-container'>
	            <div className='title'>Weather Report</div>
	            <Search/>
	            <ViewChat />
	          </div>
          </div>
		);
	}
}