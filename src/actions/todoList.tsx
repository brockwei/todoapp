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