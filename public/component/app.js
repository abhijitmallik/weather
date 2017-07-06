import React, { Component } from 'react';
import Search  from '../containers/search';
import ViewChat from '../containers/view';
import * as actions from '../actions/action';

export default class App extends Component{
	render(){
		return(
          <div>
            <Search/>
            <ViewChat />
          </div>
		);
	}
}