"use client";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import React from "react";

export default function ThemeProvider({ children, ...props }) {
    return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
