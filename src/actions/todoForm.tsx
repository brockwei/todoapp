import { Dispatch } from 'redux';

export const changeTodoInput = (text: string) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'CHANGE_TODO_INPUT',
            text
        });
    };
};