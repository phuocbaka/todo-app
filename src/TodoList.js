import React,{ Component } from 'react';

class TodoList extends Component{
    render() {
    return <tr>{this.props.name}</tr>

    }
}

export default TodoList;