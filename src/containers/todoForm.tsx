import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import { changeTodoInput } from '../actions/todoForm';

interface ToDoFormProps {
    todoInput: string;
    changeTodoInput: (text: string) => Dispatch<Object>;
}

class ToDoForm extends React.Component<ToDoFormProps, {}> {
    handleInputChange(e: any) {
        console.log(e.currentTarget.value);

    }
    handleAddItem(e: any) {
        console.log(e);
    }
    render() {
        console.log(this.props);
        return (
            <div className="todo-form">
                <input 
                    onChange={this.handleInputChange}
                    type="text" 
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
            changeTodoInput: changeTodoInput
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);