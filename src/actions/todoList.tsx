import { Dispatch } from 'redux';
import { ITodoListState } from '../interface';

export const toggleTodoItem = (todoItem: ITodoListState) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'TOGGLE_TODO_ITEM',
            todoItem
        });
    };
};