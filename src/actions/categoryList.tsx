import { Dispatch } from 'redux';
import { ICategory } from '../interface';

export const setActiveCategory = (categoryItem: ICategory) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'SET_ACTIVE_CATEGORY',
            categoryItem
        });
    };
};

export const deleteCategory = (categoryItem: ICategory) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'DELETE_CATEGORY',
            categoryItem
        });
    };
};