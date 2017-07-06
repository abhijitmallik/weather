import React , { Component } from 'react';
import { connect } from 'react-redux';

class ViewChat extends Component{
	constructor(props){
		super(props);
	}
	render(){
		if(!this.props.cityreducer){
			return(<div>please enter city..</div>)
		}
		return(
		       <ul>
		          {this.props.cityreducer.map(this.renderWeather)}
		       </ul>
		    )
	}
	renderWeather(obj){
		    const elem = [];
			obj.list.map(temp=>{
				elem.push(<li key={temp.dt_txt}><span>Date : {temp.dt_txt}</span><span> Temp : {temp.main.temp}</span></li>)
	        })
	        return elem;
	}
} 

function bindPropsToAction(state){
	if(state.cityreducer.length === 0){
		return {'cityreducer':null};
	}else{
		return {'cityreducer':state.cityreducer};
	}
   
}

export default connect(bindPropsToAction)(ViewChat);