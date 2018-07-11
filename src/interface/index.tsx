export interface ITodo {
    id: number;
    status: string;
    text: string;
    category: string;
    // date: Date;
    // completeDate: Date;
    date: string;
    completeDate: string;
}

export interface ICategory {
    id: number;
    category: string;
}

// Container/Component specific
export interface TodoListProps {
    todoList: ITodo[];
    // changeTodoInput: (text: string) => Dispatch<Object>;
}