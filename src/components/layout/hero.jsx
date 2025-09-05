"use client";

import { motion } from "motion/react";
import Navbar from "./navbar";
import { Button } from "../ui/button";

export default function Hero() {
    return (
        <div className="min-h-screen relative overflow-hidden">
            <Navbar />
            <div className="container mx-auto px-6 lg:px-12 pt-12 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 lg:gap-12 items-center min-h-[calc(100vh-200px)] ">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                I AM A <br />
                                <span className="bg-gradient-to-r from-[#71C0BB] to-[#334A81] bg-clip-text text-transparent">
                                    FRONTEND
                                </span>
                                {""} DEVELOPER
                            </motion.h1>
                        </div>
                        <div className="space-y-4">
                            <motion.p
                                className="text-lg md:text-xl leading-relaxed text-white/70 max-w-2xl tracking-tighter"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                👋 Hi, I am{" "}
                                <span className="font-semibold text-[#334A81] ">
                                    Edanur Korkmaz,
                                </span>
                            </motion.p>
                            <motion.p
                                className="text-base md:text-lg leading-relaxed text-white/70 max-w-2xl tracking-tighter"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                a passionate frontend developer with a keen eye
                                for detail and a love for creating beautiful,
                                user-friendly web applications. My journey in
                                web development has been driven by a desire to
                                craft seamless user experiences and bring ideas
                                to life through code.
                            </motion.p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 pt-4">
                            <div className="text-center sm:text-left">
                                <div className="text-2xl md:text-3xl font-bold text-[#334A81] ">
                                    25+
                                </div>
                                <div className="text-sm text-white/70">
                                    Successfully Completed Projects
                                </div>
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="text-2xl md:text-3xl font-bold text-[#334A81] ">
                                    1+
                                </div>
                                <div className="text-sm text-white/70">
                                    Years of Experience
                                </div>
                            </div>
                        </div>
                        <div className="pt-6">
                            <a
                                href="https://github.com/edanuurkorkmaz"
                                target="_blank"
                                className="px-6 py-3 bg-gradient-to-r from-[#334A81] to-[#71C0BB] hover:from-[#2c406e] hover:to-[#129990] text-white font-semibold rounded-full hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105transition-all hover:scale-105 shadow-lg"
                            >
                                Hire Me
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end items-center lg:items-end relative">
                        <div className="relative group cursor-pointer">
                            {/* Background glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#71C0BB]/20 to-[#334A81]/20 rounded-full blur-2xl scale-110 group-hover:scale-125 group-hover:from-[#71C0BB]/30 group-hover:to-[#334A81]/30 transition-all duration-500"></div>
                            <div className="w-72 h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] relative group-hover:scale-105 transition-all duration-500 ease-out">
                                <motion.img
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    src="/eda-2.png"
                                    alt="Edanur Korkmaz - Frontend Developer"
                                    width={420}
                                    height={420}
                                    className="w-full h-full object-contain filter drop-shadow-2xl relative z-10"
                                />
                                {/* Enhanced decorative elements with hover animations */}
                                <div className="absolute -top-6 -right-6 w-10 h-10 bg-gradient-to-r from-[#71C0BB] to-[#334A81] rounded-full opacity-80 animate-pulse shadow-lg group-hover:scale-125 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300"></div>

                                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-[#334A81] to-[#2A305F] rounded-full opacity-70 animate-pulse delay-1000 shadow-lg group-hover:scale-125 group-hover:opacity-90 group-hover:translate-y-2 group-hover:-translate-x-2 transition-all duration-300 delay-100"></div>

                                <div className="absolute top-1/3 -left-8 w-6 h-6 bg-gradient-to-r from-[#2A305F] to-[#71C0BB] rounded-full opacity-60 animate-pulse delay-500 shadow-lg group-hover:scale-150 group-hover:opacity-80 group-hover:-translate-x-3 group-hover:-translate-y-1 transition-all duration-300 delay-200"></div>

                                <div className="absolute bottom-1/3 -right-2 w-4 h-4 bg-gradient-to-r from-[#71C0BB] to-[#334A81] rounded-full opacity-50 animate-pulse delay-700 shadow-lg group-hover:scale-125 group-hover:opacity-70 group-hover:translate-x-3 group-hover:translate-y-1 transition-all duration-300 delay-150"></div>

                                {/* Floating geometric shapes with hover effects */}
                                <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-white/30 rotate-45 animate-pulse delay-300 group-hover:rotate-[225deg] group-hover:scale-125 group-hover:bg-white/50 transition-all duration-500"></div>

                                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/20 rounded-full animate-pulse delay-900 group-hover:scale-150 group-hover:bg-white/40 transition-all duration-300"></div>

                                {/* New hover-only elements */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-[#71C0BB]/0 group-hover:border-b-[#71C0BB]/30 group-hover:scale-100 transition-all duration-500 delay-300"></div>

                                {/* Orbiting elements on hover */}
                                <div
                                    className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#71C0BB] rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-spin transition-all duration-300"
                                    style={{
                                        transform:
                                            "translate(-50%, -50%) rotate(0deg) translateX(150px) rotate(0deg)",
                                        animation: "orbit 3s linear infinite",
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
