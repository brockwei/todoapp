import { Dispatch } from 'redux';
import { ITodo } from '../interface';

export const toggleTodoItem = (todoItem: ITodo) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'TOGGLE_TODO_ITEM',
            todoItem
        });
    };
};

export const deleteTodoItem = (todoItem: any) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'DELETE_TODO_ITEM',
            todoItem
        });
    };
};