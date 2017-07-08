import React , { Component } from 'react';
import { connect } from 'react-redux';
import '../app.css';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import GoogleMap from '../component/googleMap';

class ViewChat extends Component{
	constructor(props){
		super(props);
		this.renderWeather = this.renderWeather.bind(this);
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
		    const elem = {temp:[],pressure:[]};
		    const chart = [];
			obj.list.map(temp=>{
				elem.temp.push(temp.main.temp);
				elem.pressure.push(temp.main.pressure);
	        })
        	var comp =  <div key={obj.city.name} className = 'spark-line-div'>
        	            <span className = "city-name">{obj.city.name}</span>
	                    <ol className = 'spark-list'>
                            <GoogleMap lat={obj.city.coord.lat} lon={obj.city.coord.lon}/>
		                    <div className = "child-chart">
				                <Sparklines  height={120} width={180} data={elem.temp}>
				                   <SparklinesLine color="red" />
				                </Sparklines>
				                <span>Temprature</span>
				            </div> 
				            <div className = "child-chart">
				                <Sparklines  height={120} width={180} data={elem.pressure}>
				                   <SparklinesLine color="blue" />
				                </Sparklines>
				                <span>Pressure</span>
				            </div>   
					    </ol>
				    </div>;
	        return  (comp)
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