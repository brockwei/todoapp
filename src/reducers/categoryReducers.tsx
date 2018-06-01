import { ICategory } from '../interface';

const defaultCategory = [
    {
        id: 1,
        category: 'Default'
    }
];

export const categoryList = (state: ICategory[] = defaultCategory, action: { type: string, categoryItem: ICategory }) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            let id = state.length === 0 ? 1 : (state[state.length - 1].id + 1);
            let itemToAdd = {
                ...action.categoryItem,
                id
            };
            return state.concat(itemToAdd);
        case 'EDIT_CATEGORY':
            return state.map((category) => {
                return category.id === action.categoryItem.id ? action.categoryItem : category;
            });
        case 'DELETE_CATEGORY':
            return state.length <= 1 ? state : state.filter((category) => {
                return category.id !== action.categoryItem.id;
            });
        default:
            return state;
    }
};

export const activeCategory = (state: number | null = null, action: { type: string, categoryItem: ICategory }) => {
    switch (action.type) {
        case 'SET_ACTIVE_CATEGORY':
            return action.categoryItem.id;
        default:
            return state;
    }
};

// Category Input
export const changeCategoryInput = (state = '', action: { type: string, text: string }) => {
    switch (action.type) {
        case 'CHANGE_CATEGORY_INPUT':
            return action.text;
        case 'CLEAR_CATEGORY_INPUT':
            return '';
        default:
            return state;
    }
};
export const editCategoryInputId = (state: number | null = null, action: { type: string, categoryItem: ICategory }) => {
    switch (action.type) {
        case 'SET_EDIT_CATEGORY_INPUT_ID':
            return action.categoryItem.id;
        case 'RESET_EDIT_CATEGORY_INPUT_ID':
            return null;
        default:
            return state;
    }
};
