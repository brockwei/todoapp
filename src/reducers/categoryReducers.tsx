import { ICategory } from '../interface';

const defaultCategory = [
    {
        id: 1,
        category: 'Default'
    }
];

export const categoryList = (state: ICategory[] = defaultCategory, action: { type: string, categoryItem: ICategory }) => {
    switch (action.type) {
        case 'ADD_CATEGORY_ITEM':
            let id = state.length === 0 ? 1 : (state[state.length - 1].id + 1);
            let itemToAdd = {
                ...action.categoryItem,
                id
            };
            return state.concat(itemToAdd);
        case 'DELETE_CATEGORY':
            return state.length <= 1 ? state : state.filter((category) => {
                return category.id !== action.categoryItem.id;
            });
        default:
            return state;
    }
};

export const activeCategory = (state: string = '', action: { type: string, categoryItem: ICategory }) => {
    switch (action.type) {
        case 'SET_ACTIVE_CATEGORY':
            return action.categoryItem.category;
        default:
            return state;
    }
};
