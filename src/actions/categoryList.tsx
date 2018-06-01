import { Dispatch } from 'redux';
import { ICategory } from '../interface';

// Category Tabs
export const setActiveCategory = (categoryItem: ICategory) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'SET_ACTIVE_CATEGORY',
            categoryItem
        });
    };
};
export const addCategory = (categoryItem: ICategory) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'ADD_CATEGORY',
            categoryItem
        });
    };
};
export const editCategory = (categoryItem: ICategory) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'EDIT_CATEGORY',
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

// Edit Category
export const editCategoryInputId = (categoryItem: ICategory) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'SET_EDIT_CATEGORY_INPUT_ID',
            categoryItem
        });
    };
};
export const resetCategoryInputId = () => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'RESET_EDIT_CATEGORY_INPUT_ID'
        });
    };
};

// Category input field
export const changeCategoryInput = (text: string) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'CHANGE_CATEGORY_INPUT',
            text
        });
    };
};
export const clearCategoryInput = () => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'CLEAR_CATEGORY_INPUT'
        });
    };
};