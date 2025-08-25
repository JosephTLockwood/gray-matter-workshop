"use client";

import clsx from "clsx";
import { MoonIcon, SunIcon, SunMoonIcon } from "lucide-react";
import { useEffect } from "react";
import { create } from "zustand";

export const useThemeStore = create<{
    theme: "light" | "dark" | "system";
    setTheme: (theme: "light" | "dark" | "system") => void;
}>((set) => ({
    theme: "system",
    setTheme: (theme: "light" | "dark" | "system") => {
        set({ theme });
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    },
}));

export default function ThemePicker() {
    const { theme, setTheme } = useThemeStore();

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if(theme) {
            document.documentElement.setAttribute("data-theme", theme);
            setTheme(theme as "light" | "dark" | "system");
        }
    }, []);

    return (
        <div className="flex items-center gap-2 align-self-end justify-self-center">
            <button onClick={() => setTheme("light")} className={clsx("cursor-pointer text-gray-500", theme === "light" && "text-yellow-500")}>
                <SunIcon />
            </button>
            <button onClick={() => setTheme("system")} className={clsx("cursor-pointer text-gray-500", theme === "system" && "text-yellow-500")}>
                <SunMoonIcon />
            </button>
            <button onClick={() => setTheme("dark")} className={clsx("cursor-pointer text-gray-500", theme === "dark" && "text-yellow-500")}>
                <MoonIcon />
            </button>
        </div>
    )
}