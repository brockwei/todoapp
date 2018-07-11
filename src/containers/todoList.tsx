import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Interfaces
import { ITodo } from '../interface';
// import { TodoListProps } from '../interface';

// Actions
import { toggleTodoItem } from '../actions/todoList';

interface TodoListProps {
    todoList: ITodo[];
    activeCategory: string;
    toggleTodoItem: (todo: ITodo) => Dispatch<Object>;
}

class TodoList extends React.Component<TodoListProps, {}> {
    handleToggleTodo = (todo: ITodo) => {
        // console.log(this.props.todoInput);
        // addTodoItem(this.props.todoInput);
        this.props.toggleTodoItem(todo);
    }
    render() {
        return (
            <table className="todo-list">
                <tbody>
                    <tr>
                        <th className="todo-item-note">Todo</th>
                        <th>Create Date</th>
                        <th>Status</th>
                        <th>Complete Date</th>
                    </tr>
                    {
                        this.props.todoList.map((todo) => {
                            return (
                                this.props.activeCategory === todo.category ?
                                <tr 
                                    key={todo.id} 
                                    className={`todo-${todo.status} todo-item`} 
                                    onClick={() => { this.handleToggleTodo(todo); }}
                                > 
                                    <td>{todo.text}</td>
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
        activeCategory: state.activeCategory,
    };
}
function mapDispatchToProps(dispatch: Dispatch<Object>) {
    return bindActionCreators(
        {
            toggleTodoItem,
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);