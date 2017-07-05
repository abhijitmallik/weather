import React , { Component } from 'react';
import { connect } from 'react-redux';

class ViewChat extends Component{
	render(){
		if(!this.props.cityreducer){
			return(<div>please enter city..</div>)
		}
		return(
           this.props.cityreducer.map((chat)=>{
              console.log("===chat data====",chat);
           })
		)
	}
	renderChat(){

	}
} 

function bindPropsToAction(state){
   return({'cityreducer':state.cityreducer});
}

export default connect(bindPropsToAction)(ViewChat);