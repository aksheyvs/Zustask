import { InputHTMLAttributes } from "react";

const TodoInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return <input {...props} />;
};

export default TodoInput;
