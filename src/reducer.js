import {combineReducers} from 'redux';
import {types} from './action.js';

const list = {};

const todoReducer = (state=list, action) => {
	switch(action.types){
		case 'ADD_TODO':
			list.concat(actio.payload.data);
			return {
				...state,...list
			};
		break;
		/*case 'DELETE_TODO':;
		break;*/
		default: 
			return state;
	}
}

const rootReducer = combineReducers({
	todoState: todoReducer, 
});

export default rootReducer;