import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
    title: "Edanur Korkmaz | Frontend Developer",
    description:
        "Explore the personal portfolio of Edanur Korkmaz, a frontend developer specializing in modern web technologies like React, Next.js, and Tailwind CSS.",
    keywords: [
        "Edanur Korkmaz",
        "Frontend Developer",
        "React Developer",
        "Next.js Portfolio",
        "Web Developer",
        "Tailwind CSS",
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={` antialiased`}>{children}</body>
        </html>
    );
}
