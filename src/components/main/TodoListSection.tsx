import { useTodosStore } from "../../store/todoStore";
import TodoInput from "../TodoInput";
import TodoParagraph from "../TodoParagraph";
import TodoButton from "../TodoButton";

function TodoListSection() {
    const todos = useTodosStore((state) => state.todos);
    const page = useTodosStore((state) => state.page);
    const active = todos.filter((todo) => todo.completed === false);
    const completed = todos.filter((todo) => todo.completed === true);
    const updateTodo = useTodosStore((state) => state.updateTodo);

    const getCurrentTodos = () => {
        if (page === "active") return active;
        if (page === "completed") return completed;
        return todos;
    };

    const currentTodos = getCurrentTodos();

    const todoLists = currentTodos.map((todo) => {
        const checkbox = (
            <div>
                <TodoInput
                    type="checkbox"
                    className="flex w-[2.4rem] h-[2.4rem] justify-center items-center curser-pointer"
                    checked={todo.completed}
                    onChange={() => updateTodo(todo.key)}
                    id={todo.key}
                />
            </div>
        );

        const todoTask =
            todo.completed === false ? (
                <TodoParagraph className="font-sans font-[500] text-[1.8rem]">{todo.name}</TodoParagraph>
            ) : (
                <TodoParagraph className="font-sans font-[500] text-[1.8rem] line-through text-[hsl(233,11%,84%)] dark:text-[hsl(233,14%,35%)]">
                    {todo.name}
                </TodoParagraph>
            );

        const todoLi = (
            <li
                key={todo.key}
                className="flex flex-row h-[6.4rem] justify-start items-center pl-[2.4rem] pr-[2.4rem] gap-[2.4rem] border-b-[0.1rem] border-b-[hsl(236,33%,92%)] last:border-b-0 dark:border-b-[hsl(237,14%,26%)] dark:last:border-b-[hsl(237,14%,26%)]"
            >
                {checkbox}
                {todoTask}
            </li>
        );

        return todoLi;
    });

    const defaultTodo = (
        <li className="flex flex-row h-[6.4rem] justify-start items-center pl-[2.4rem] pr-[2.4rem] font-sans font-[500] text-[1.8rem]">
            There's no task
        </li>
    );

    const todosCount = currentTodos.length;
    const setPageAll = useTodosStore((state) => state.setPageAll);
    const setPageActive = useTodosStore((state) => state.setPageActive);
    const setPageCompleted = useTodosStore((state) => state.setPageCompleted);
    const clearCompleted = useTodosStore((state) => state.clearCompleted);

    return (
        <section className="bg-white rounded-[1rem] mb-[4.8rem] shadow-[-1px_5px_20px_10px_rgba(157,162,235,0.3)] dark:bg-[hsl(235,24%,19%)] dark:shadow-[-1px_5px_20px_10px_rgba(37,39,60,0.2)]">
            <ul>{todoLists.length === 0 ? defaultTodo : todoLists}</ul>
            <div className="flex justify-between items-center p-[2.4rem] border-t-[0.1rem] border-t-[hsl(236,33%,92%)] dark:border-t-[hsl(237,14%,26%)]">
                <div className="font-sans font-[500] text-[1.8rem]">{todosCount} items left</div>
                <div className="flex gap-[1rem]">
                    <div className="flex gap-[1rem]">
                        <TodoButton
                            onClick={setPageAll}
                            className={
                                page === "all"
                                    ? "cursor-pointer font-sans font-[700] text-[1.8rem] text-[hsl(236,9%,61%)] dark:text-[hsl(192,100%,67%)]"
                                    : "cursor-pointer font-sans font-[500] text-[1.8rem] text-[hsl(236,9%,61%)]"
                            }
                        >
                            All
                        </TodoButton>
                        <TodoButton
                            onClick={setPageActive}
                            className={
                                page === "active"
                                    ? "cursor-pointer font-sans font-[700] text-[1.8rem] text-[hsl(236,9%,61%)] dark:text-[hsl(192,100%,67%)]"
                                    : "cursor-pointer font-sans font-[500] text-[1.8rem] text-[hsl(236,9%,61%)]"
                            }
                        >
                            Active
                        </TodoButton>
                        <TodoButton
                            onClick={setPageCompleted}
                            className={
                                page === "completed"
                                    ? "cursor-pointer font-sans font-[700] text-[1.8rem] text-[hsl(236,9%,61%)] dark:text-[hsl(192,100%,67%)]"
                                    : "cursor-pointer font-sans font-[500] text-[1.8rem] text-[hsl(236,9%,61%)]"
                            }
                        >
                            Completed
                        </TodoButton>
                    </div>
                </div>
                <div>
                    <TodoButton onClick={clearCompleted} className="font-sans text-[1.8rem] font-[500]">
                        Clear Completed
                    </TodoButton>
                </div>
            </div>
        </section>
    );
}

export default TodoListSection;
