import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeStore = {
    theme: string;
    toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStore>()(
    persist(
        (set, get) => ({
            theme: "light",
            toggleTheme: () => set({ theme: get().theme === "light" ? "dark" : "light" }),
        }),
        {
            name: "theme-storage",
        }
    )
);
