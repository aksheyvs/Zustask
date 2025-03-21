import TodoButton from "../TodoButton";
import { useThemeStore } from "../../store/settingsStore";
import { useEffect } from "react";

function Header() {
    const toggleTheme = useThemeStore((state) => state.toggleTheme);
    const theme = useThemeStore((state) => state.theme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    });

    return (
        <header className="text-white flex justify-between items-center mb-[4.8rem]">
            <h1 className="font-sans text-[3.6rem] font-[700]">TODO</h1>
            <TodoButton onClick={toggleTheme} className="border-none bg-transparent cursor-pointer">
                <img src={theme === "light" ? "/moon-4-32.png" : "/sun-2-24.png"} />
            </TodoButton>
        </header>
    );
}

export default Header;
