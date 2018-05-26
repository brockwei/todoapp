interface Istate {
    id: number;
    status: string;
    text: string;
    category: string;
}

export const toDoList = (state: Istate[] = [], action: { type: string, toDoItem: any }) => {
    switch (action.type) {
        case 'ADD_TODO_ITEM':
            return state.concat(action.toDoItem);
        case 'TOGGLE_TODO_ITEM':
            return state.map((todo) => {
                if (todo.id === action.toDoItem.id) {
                    let status = ['inactive', 'active', 'complete'];
                    return {
                        ...todo,
                        status: status[(status.indexOf(action.toDoItem.status) + 1) % 3]
                    };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

export const changeTodoInput = (state: '', action: { type: string, text: string }) => {
    switch (action.type) {
        case 'CHANGE_TODO_INPUT':
            return action.text;
        default:
            return state;
    }
};