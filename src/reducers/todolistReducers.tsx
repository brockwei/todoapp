// Interface
import { ITodo } from '../interface';

export const todoList = (state: ITodo[] = [], action: { type: string, todoItem: any }) => {
    switch (action.type) {
        case 'ADD_TODO_ITEM':
            let id = state.length === 0 ? 1 : (state[state.length - 1].id + 1);
            let itemToAdd = {
                ...action.todoItem,
                id,
                status: 'inactive',
                date: (new Date()).toISOString().substring(0, 10),
                completeDate: '',
            };
            return state.concat(itemToAdd);
        case 'TOGGLE_TODO_ITEM':
            return state.map((todo) => {
                if (todo.id === action.todoItem.id) {
                    let status = ['inactive', 'active', 'complete'];
                    return {
                        ...todo,
                        status: status[(status.indexOf(action.todoItem.status) + 1) % 3],
                        completeDate: status[(status.indexOf(action.todoItem.status) + 1) % 3] === 'complete' ? 
                                        (new Date()).toISOString().substring(0, 10) : ''
                    };
                } else {
                    return todo;
                }
            });
        case 'LOAD_TODO_LIST':
            return action.todoItem;
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