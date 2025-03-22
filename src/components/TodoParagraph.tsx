import { ReactNode } from "react";

const TodoParagraph = ({
    children,
    ...restOfTheProperties
}: { children: ReactNode } & React.HTMLAttributes<HTMLParagraphElement>) => {
    return <p {...restOfTheProperties}>{children}</p>;
};

export default TodoParagraph;
