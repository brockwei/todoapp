const defaultFilters = ['inactive', 'active', 'complete'];

export const todoFilter = (state: string[] = defaultFilters, action: { type: string, filter: any }) => {
    switch (action.type) {
        // case 'ADD_TODO_FILTER':
        //     return state.concat(action.filter);
        // case 'REMOVE_TODO_FILTER':
        //     return state.filter((filter) => { return filter !== action.filter; });
        case 'TOGGLE_TODO_FILTER':
            return state.indexOf(action.filter) < 0 ? state.concat(action.filter) : state.filter((filter) => { return filter !== action.filter; });
        case 'LOAD_TODO_FILTER':
            return action.filter;
        default:
            return state;
    }
};

export const mobileCategoryVisibility = (state = false, action: { type: string }) => {
    switch (action.type) {
        case 'TOGGLE_CATEGORY_VISIBILITY':
            return !state;
        default:
            return state;
    }
};