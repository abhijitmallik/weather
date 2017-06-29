import React from 'react';
import {Component} from 'react';
import Books from '../containers/booklist';
import BookDetails from '../containers/bookItem';


export default class App extends Component{
	render(){
		return(
          <div>
            <Books />
            <BookDetails />
          </div>
		)
	}
}


