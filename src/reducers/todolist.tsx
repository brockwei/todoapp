// Interface
import { ITodoListState } from '../interface';

export const todoList = (state: ITodoListState[] = [], action: { type: string, todoItem: ITodoListState }) => {
    switch (action.type) {
        case 'ADD_TODO_ITEM':
            let id = state.length === 0 ? 1 : (state[state.length - 1].id + 1);
            let itemToAdd = {
                ...action.todoItem,
                id,
                status: 'inactive'
            };
            return state.concat(itemToAdd);
        case 'TOGGLE_TODO_ITEM':
            return state.map((todo) => {
                if (todo.id === action.todoItem.id) {
                    let status = ['inactive', 'active', 'complete'];
                    return {
                        ...todo,
                        status: status[(status.indexOf(action.todoItem.status) + 1) % 3]
                    };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

export const changeTodoInput = (state = '', action: { type: string, text: string }) => {
    switch (action.type) {
        case 'CHANGE_TODO_INPUT':
            return action.text;
        case 'CLEAR_TODO_INPUT':
            return '';
        default:
            return state;
    }
};