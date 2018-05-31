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
            <div className="todo-list">
                {
                    this.props.todoList.map((todo) => {
                        return (
                            <div 
                                className={`todo-${todo.status}`}
                                key={todo.id} 
                                onClick={() => {
                                    this.handleToggleTodo(todo);
                                }}
                            >
                                {todo.text}
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        todoList: state.todoList
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