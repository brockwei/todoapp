import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { DeleteButton } from 'src/components/buttons';

// Interfaces
import { ITodo } from '../interface';
// import { TodoListProps } from '../interface';

// Actions
import { toggleTodoItem, deleteTodoItem } from '../actions/todoList';

interface TodoListProps {
    activeFilters: string[];
    todoList: ITodo[];
    activeCategory: string;
    toggleTodoItem: (todo: ITodo) => Dispatch<object>;
    deleteTodoItem: (todo: ITodo) => Dispatch<object>;
}

class TodoList extends React.Component<TodoListProps, {}> {
    handleToggleTodo = (todo: ITodo) => {
        this.props.toggleTodoItem(todo);
    }
    render() {
        return (
            <table className="todo-list">
                <tbody>
                    <tr>
                        <th className="todo-item-note">Todo</th>
                        <th>Create<span className="mobile-hidden"> Date</span></th>
                        <th>Status</th>
                        <th>Complete<span className="mobile-hidden"> Date</span></th>
                    </tr>
                    {
                        this.props.todoList.map((todo) => {
                            return (
                                this.props.activeCategory === todo.category && this.props.activeFilters.indexOf(todo.status) >= 0 ?
                                <tr 
                                    key={todo.id} 
                                    className={`todo-${todo.status} todo-item`} 
                                    onClick={() => { this.handleToggleTodo(todo); }}
                                > 
                                    <td><DeleteButton handleClick={this.props.deleteTodoItem} deleteItem={todo} /> {todo.text}</td>
                                    <td>{todo.date}</td>
                                    <td>{todo.status}</td>
                                    <td>{todo.completeDate}</td>
                                </tr>
                                : null
                            );
                        })
                    }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        todoList: state.todoList,
        activeFilters: state.todoFilter,
        activeCategory: state.activeCategory,
    };
}
function mapDispatchToProps(dispatch: Dispatch<Object>) {
    return bindActionCreators(
        {
            toggleTodoItem,
            deleteTodoItem
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);