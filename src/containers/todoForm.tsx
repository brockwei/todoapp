import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import { changeTodoInput, addTodoItem } from '../actions/todoForm';

interface TodoFormProps {
    todoInput: string;
    activeCategory: string;
    changeTodoInput: (text: string) => Dispatch<Object>;
    addTodoItem: (todoItem: { text: string, category: string }) => Dispatch<Object>;
}

class TodoForm extends React.Component<TodoFormProps, {}> {
    handleInputChange = (e: any) => {
        // console.log(e.currentTarget.value);
        this.props.changeTodoInput(e.currentTarget.value);
    }
    handleAddItem = (e: any) => {
        e.preventDefault();
        if (this.props.todoInput.length > 0) {
            this.props.addTodoItem({text: this.props.todoInput, category: this.props.activeCategory});
        }
    }
    render() {
        return (
            <form className="todo-form" onSubmit={this.handleAddItem}>
                <input 
                    className="todo-input"
                    onChange={this.handleInputChange}
                    type="text"
                    value={this.props.todoInput}
                    placeholder="Add Todo"
                    // onBlur={() => { console.log('blurred'); }}
                />
                <div style={{ height: '53px' }}>
                    <button
                        // onClick={this.handleAddItem}
                    >
                        Add
                    </button>
                </div>
            </form>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        todoInput: state.changeTodoInput,
        activeCategory: state.activeCategory
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