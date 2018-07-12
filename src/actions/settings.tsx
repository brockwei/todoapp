import { Dispatch } from 'redux';

export const toggleTodoFilter = (filter: string) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'TOGGLE_TODO_FILTER',
            filter
        });
    };
};
export const toggleCategoryVisibility = () => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'TOGGLE_CATEGORY_VISIBILITY'
        });
    };
};
export const loadCategoryList = (categoryItem: any) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'LOAD_CATEGORY_LIST',
            categoryItem
        });
    };
};

export const loadTodoList = (todoItem: any) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'LOAD_TODO_LIST',
            todoItem
        });
    };
};

export const loadTodoFilter = (filter: any) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'LOAD_TODO_FILTER',
            filter
        });
    };
};