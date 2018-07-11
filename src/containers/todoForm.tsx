import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import store from 'src/reducers';

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
    test = () => {
        console.log(store.getState());
    }
    render() {
        return (
            <form className="todo-form" onSubmit={this.handleAddItem}>
                <input 
                    className="todo-input"
                    onChange={this.handleInputChange}
                    type="text"
                    value={this.props.todoInput}
                    // onBlur={() => { console.log('blurred'); }}
                />
                <button
                    onClick={this.test}
                    // onClick={this.handleAddItem}
                >
                    Add Todo
                </button>
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