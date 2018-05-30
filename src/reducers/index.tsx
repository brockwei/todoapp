import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import { todoList, changeTodoInput } from './todolist';

const reducers = combineReducers({
    todoList,
    changeTodoInput
});

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;