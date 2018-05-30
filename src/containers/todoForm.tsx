import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import { changeTodoInput, addTodoItem } from '../actions/todoForm';

interface TodoFormProps {
    todoInput: string;
    changeTodoInput: (text: string) => Dispatch<Object>;
    addTodoItem: (todoItem: { text: string, category: string }) => Dispatch<Object>;
}

class TodoForm extends React.Component<TodoFormProps, {}> {
    handleInputChange = (e: any) => {
        // console.log(e.currentTarget.value);
        this.props.changeTodoInput(e.currentTarget.value);
    }
    handleAddItem = () => {
        // console.log(this.props.todoInput);
        this.props.addTodoItem({text: this.props.todoInput, category: 'category'});
    }
    render() {
        return (
            <div className="todo-form">
                <input 
                    onChange={this.handleInputChange}
                    type="text"
                    value={this.props.todoInput}
                />
                <button
                    onClick={this.handleAddItem}
                >
                    Add Item
                </button>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        todoInput: state.changeTodoInput
    };
}
function mapDispatchToProps(dispatch: Dispatch<Object>) {
    return bindActionCreators(
        {
            changeTodoInput: changeTodoInput,
            addTodoItem: addTodoItem
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);