import React from 'react';
import TodoList from "./TodoList.jsx";

import { Lifecycle } from 'react-router';

class Users extends React.Component {
	mixins : [ Lifecycle ];
	outerWillLeave(nextLocation) {
		console.log();
    	if (this.state.isSaved)
    		return 'Your work is not saved! Are you sure you want to leave?'
	}
    render() {
        return (
            <div>
                <h2>Users</h2>
                <TodoList></TodoList>
            </div>
        )
    }
}

export default Users;