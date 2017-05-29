import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Todolist extends Component{
	constructor(props) {
		super(props);
		this.state = {
			todo : null, 
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			todo: nextProps.todoState,
		})
	}

	render(){

		const todos = this.state.todo;
		return (
			<div style="color:red">
				{todos}
			</div>
		);
	}
}

function mapStateToProps({todoState}){
	return {todoState}   // change of state recorded in todolist
}

function mapDispatchToProps(dispatch){
	// no action done here
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);