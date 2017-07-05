export default function(state=null,action){

        switch(action.type){
        	case 'CITY-NAME':
        	console.log("===action=====",action.payload);
        	 return action.payload.data;
        }
	    return state;
}