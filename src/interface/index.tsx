export interface ITodoListState {
    id: number;
    status: string;
    text: string;
    category: string;
}

// Container/Component specific
export interface TodoListProps {
    todoList: ITodoListState[];
    // changeTodoInput: (text: string) => Dispatch<Object>;
}