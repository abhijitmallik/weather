import axios from 'axios';

const API_KEY = "6b0bbf2a30d47fc940ea9db2e2610a54";
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export function cityName(cityName){
	const url = `${ROOT_URL}&q={cityName},us`;
	const request = axios.get(url);
   	  return{type:'CITY-NAME',payload:request};
}