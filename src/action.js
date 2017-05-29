export const types = {
	ADD_TODO: "ADD_TODO",
	DELETE_TODO: "DELETE_TODO",
}

export function addTodo(todo){

	const data = todo;
	
	return {
		type: ADD_TODO,
		payload: data
	}

}

/*export function deleteTodo(){

}*/