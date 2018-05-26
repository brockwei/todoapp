import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import { toDoList, changeTodoInput } from './todolist';

const reducers = combineReducers({
    toDoList,
    changeTodoInput
});

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;