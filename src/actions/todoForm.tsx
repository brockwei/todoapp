import { Dispatch } from 'redux';

export const changeTodoInput = (text: string) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'CHANGE_TODO_INPUT',
            text
        });
    };
};

export const addTodoItem = (todoItem: { text: string, category: string }) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'ADD_TODO_ITEM',
            todoItem
        });
        // Clear todo input
        dispatch({
            type: 'CLEAR_TODO_INPUT'
        });
    };
};