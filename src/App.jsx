import React, {Component} from 'react';
import {addTodo} from './action.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Todolist } from './component/todoList.jsx'

class App extends Component {
	constructor(props) {
		super(props);
	}
   
    add = (event) => {
   	  event.preventDefault();
   	  const value = this.refs.val.getValue();
   	  this.props.addTodo(value);
    }

    render() {
      return (
        <div>
	        <Todolist/>
	     	<input type="text" className="newtodo" refs="val"/>
	        <button onclick={this.add}>Add Todo</button>
        </div>
      );
    }
}

function mapStateToProps(){
	// no interaction with reducer needed here
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		addTodo,
	},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
