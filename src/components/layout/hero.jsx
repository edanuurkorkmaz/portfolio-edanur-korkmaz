"use client";

import BeamsBackground from "../ui/beam-background";
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
                                <span className="bg-gradient-to-r from-[#2A305F] to-[#334A81] bg-clip-text text-transparent">
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
                            <Button
                                size="lg"
                                className=" cursor-pointer bg-gradient-to-r from-[#334A81] to-[#71C0BB] hover:from-[#2c406e] hover:to-[#129990] text-white font-semibold px-8 py-6 rounded-full text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                            >
                                Hire Me
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end items-center lg:items-end relative">
                        <div className="relative">
                            {/* Background glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#fff]/20 to-purple-400/20 rounded-full blur-2xl scale-110"></div>
                            <div className="w-72 h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] relative">
                                <motion.img
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    src="/eda-2.png"
                                    alt="Edanur Korkmaz - Frontend Developer"
                                    width={420}
                                    height={420}
                                    className="w-full h-full object-contain filter drop-shadow-2xl relative z-10"
                                    priority
                                />

                                {/* Enhanced decorative elements with better positioning */}
                                <div className="absolute -top-6 -right-6 w-10 h-10 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-80 animate-pulse shadow-lg"></div>
                                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-70 animate-pulse delay-1000 shadow-lg"></div>
                                <div className="absolute top-1/3 -left-8 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-60 animate-pulse delay-500 shadow-lg"></div>
                                <div className="absolute bottom-1/3 -right-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-50 animate-pulse delay-700 shadow-lg"></div>

                                {/* Floating geometric shapes */}
                                <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-white/30 rotate-45 animate-pulse delay-300"></div>
                                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/20 rounded-full animate-pulse delay-900"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
