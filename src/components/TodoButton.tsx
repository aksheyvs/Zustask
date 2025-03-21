import { ReactNode } from "react";

const TodoButton = ({
    children,
    ...restOfTheProperties
}: { children: ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <button {...restOfTheProperties}>{children}</button>;
};

export default TodoButton;
