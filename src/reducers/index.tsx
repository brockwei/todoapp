import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import { todoList, changeTodoInput } from './todolistReducers';
import { categoryList, activeCategory, changeCategoryInput, editCategoryInputId } from './categoryReducers';

const reducers = combineReducers({
    // Category Reducers
    categoryList,
    activeCategory,
    changeCategoryInput,
    editCategoryInputId,
    // Todo List Reducers
    todoList,
    changeTodoInput,
});

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;