import React , { Component } from 'react';
import { connect } from 'react-redux';
import '../app.css';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class ViewChat extends Component{
	constructor(props){
		super(props);
	}
	render(){
		if(!this.props.cityreducer){
			return(<div></div>)
		}
		return(
		       <ul className = "weather-report">
		          {this.props.cityreducer.map(this.renderWeather)}
		       </ul>
		    )
	}
	renderWeather(obj){
		    const elem = [];
			obj.list.map(temp=>{
				elem.push(temp.main.temp)
	        })
	        return  (<div>
		                <li className="spark-line-div">
			                <Sparklines key={elem} height={120} width={180} data={elem}>
			                   <SparklinesLine color="red" />
			                </Sparklines>
					    </li>
					    <li className="spark-line-div">
			                <Sparklines key={elem} height={120} width={180} data={elem}>
			                   <SparklinesLine color="red" />
			                </Sparklines>
					    </li>
				    </div>)
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