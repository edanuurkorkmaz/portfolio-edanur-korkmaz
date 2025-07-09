"use client";
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ToggleTheme() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="cursor-pointer rounded-full p-2 transition-colors duration-300 ease-in-out"
        >
            <Sun className="h-5 w-5 text-gray-500 dark:hidden" />
            <Moon className="h-5 w-5 text-purple-500 hidden dark:block" />
        </button>
    );
}
