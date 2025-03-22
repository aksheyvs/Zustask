import { create } from "zustand";
import { persist } from "zustand/middleware";

type Todo = { key: string; name: string; completed: boolean };
type TodosStore = {
    todos: Todo[];
    addTodos: (newTodo: Todo) => void;
    page: string;
    updateTodo: (key: string) => void;
    setPageAll: () => void;
    setPageActive: () => void;
    setPageCompleted: () => void;
    clearCompleted: () => void;
};

export const useTodosStore = create<TodosStore>()(
    persist(
        (set, get) => ({
            todos: [],
            addTodos: (newTodo) => set({ todos: [...get().todos, newTodo] }),
            page: "all",
            updateTodo: (key) =>
                set({
                    todos: get().todos.map((todo) => {
                        if (todo.key === key) return { ...todo, completed: !todo.completed };
                        return todo;
                    }),
                }),
            setPageAll: () => set({ page: "all" }),
            setPageActive: () => set({ page: "active" }),
            setPageCompleted: () => set({ page: "completed" }),
            clearCompleted: () => set({ todos: get().todos.filter((todo) => todo.completed === false) }),
        }),
        {
            name: "todos-storage",
        }
    )
);
