export default function(state=[],action){

        switch(action.type){
        	case 'CITY-NAME':
        	return [action.payload.data,...state];
        }
	    return state;
}