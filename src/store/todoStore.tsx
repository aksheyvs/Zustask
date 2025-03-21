import { create } from "zustand";
import { persist } from "zustand/middleware";
import {v4 as uuidv4} from "uuid"

type Todo = {key: string, name: string, completed: boolean}
type TodosStore = {
    todos: Todo[];
    addTodos: () => void;
}

export const useTodosStore = create<TodosStore>()(
    persist(
        (set, get) => ({
            todos: [],
            addTodos: () => set({todos: get().),
        }),
        {
            name: "todos-storage"
        }
    ),
    
)