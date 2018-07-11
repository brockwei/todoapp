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
            <div className="todo-list">
                {
                    this.props.todoList.map((todo) => {
                        return (
                            this.props.activeCategory === todo.category ?
                            <div 
                                className={`todo-${todo.status} todo-item`}
                                key={todo.id} 
                                onClick={() => {
                                    this.handleToggleTodo(todo);
                                }}
                            >
                                {todo.text}
                            </div>
                            : null
                        );
                    })
                }
            </div>
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