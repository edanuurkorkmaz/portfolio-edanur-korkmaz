"use client";

import { useState } from "react";
import { Calendar, ChevronRight } from "lucide-react";
import {
    personalFacts,
    journeySteps,
    personalInfo,
} from "@/app/data/portfolio-data";

export default function AboutSection() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section
            id="about"
            className="py-20 bg-gradient-to-b from-[#2A305F]/20 to-transparent relative"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-1/6 w-24 h-24 bg-[#334A81]/5 rounded-full blur-xl"></div>
                <div className="absolute bottom-1/3 right-1/6 w-32 h-32 bg-[#71C0BB]/5 rounded-full blur-xl"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        About{" "}
                        <span className="bg-gradient-to-r from-[#71C0BB] to-[#334A81] bg-clip-text text-transparent">
                            Me
                        </span>
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        Get to know the person behind the code - my story,
                        passion, and what drives me to create exceptional web
                        experiences
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Personal Story */}
                    <div className="space-y-8">
                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                            <h3 className="text-2xl font-bold mb-6 text-white">
                                My Story
                            </h3>
                            <div className="space-y-4 text-white/80 leading-relaxed">
                                <p>
                                    Hi there! I'm{" "}
                                    <span className="text-[#71C0BB] font-semibold">
                                        {personalInfo.name}
                                    </span>
                                    , a passionate frontend developer who
                                    discovered the magic of web development
                                    through curiosity and determination. My
                                    journey began with a simple question: "How
                                    do websites work?"
                                </p>
                                <p>
                                    What started as casual exploration quickly
                                    became an obsession. I found myself
                                    captivated by the perfect blend of
                                    creativity and logic that frontend
                                    development offers. The ability to transform
                                    ideas into interactive, beautiful
                                    experiences that users can actually touch
                                    and feel - that's what hooked me.
                                </p>
                                <p>
                                    Today, I specialize in{" "}
                                    <span className="text-[#71C0BB]">
                                        React
                                    </span>
                                    ,{" "}
                                    <span className="text-[#71C0BB]">
                                        Next.js
                                    </span>
                                    , and{" "}
                                    <span className="text-[#71C0BB]">
                                        Tailwind CSS
                                    </span>
                                    , but I'm always eager to learn new
                                    technologies. I believe that great frontend
                                    development is about more than just code -
                                    it's about understanding users, solving
                                    problems, and creating experiences that make
                                    people's lives a little bit better.
                                </p>
                                <p>
                                    When I'm not coding, you'll find me
                                    exploring new design trends, contributing to
                                    open-source projects, or planning my next
                                    learning adventure. I'm currently looking
                                    for opportunities to join a team where I can
                                    contribute my skills while continuing to
                                    grow as a developer.
                                </p>
                            </div>
                        </div>

                        {/* Personal Facts */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {personalFacts.map((fact, index) => {
                                const IconComponent = fact.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 bg-gradient-to-r from-[#71C0BB] to-[#334A81] rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-white/60">
                                                    {fact.label}
                                                </div>
                                                <div className="font-semibold text-white">
                                                    {fact.value}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-white/70 leading-relaxed">
                                            {fact.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Professional Journey Timeline */}
                    <div className="space-y-8">
                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                                <Calendar className="w-6 h-6 text-[#71C0BB]" />
                                My Journey
                            </h3>

                            <div className="space-y-6">
                                {journeySteps.map((step, index) => {
                                    const IconComponent = step.icon;
                                    return (
                                        <div
                                            key={index}
                                            className={`relative cursor-pointer transition-all duration-300 ${
                                                activeStep === index
                                                    ? "scale-105"
                                                    : "hover:scale-102"
                                            }`}
                                            onClick={() => setActiveStep(index)}
                                        >
                                            {/* Timeline line */}
                                            {index <
                                                journeySteps.length - 1 && (
                                                <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-white/20 to-transparent"></div>
                                            )}

                                            <div
                                                className={`flex gap-4 p-4 rounded-2xl transition-all duration-300 ${
                                                    activeStep === index
                                                        ? "bg-gradient-to-r from-[#71C0BB]/20 to-[#334A81]/20 border border-[#71C0BB]/30"
                                                        : "bg-white/5 border border-white/10 hover:bg-white/10"
                                                }`}
                                            >
                                                <div
                                                    className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg`}
                                                >
                                                    <IconComponent className="w-5 h-5" />
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-sm font-medium text-[#71C0BB]">
                                                            {step.year}
                                                        </span>
                                                        <ChevronRight className="w-4 h-4 text-white/40" />
                                                    </div>
                                                    <h4 className="font-semibold text-white mb-2">
                                                        {step.title}
                                                    </h4>
                                                    <p
                                                        className={`text-sm leading-relaxed transition-all duration-300 ${
                                                            activeStep === index
                                                                ? "text-white/90"
                                                                : "text-white/70"
                                                        }`}
                                                    >
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="bg-gradient-to-r from-[#71C0BB]/10 to-[#334A81]/10 backdrop-blur-sm rounded-2xl p-6 border border-[#71C0BB]/20 text-center">
                            <h4 className="text-xl font-semibold text-white mb-3">
                                Let's Work Together!
                            </h4>
                            <p className="text-white/80 mb-4">
                                I'm always excited to collaborate on new
                                projects and bring creative ideas to life.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <a
                                    href="#contact"
                                    className="px-6 py-3 bg-gradient-to-r from-[#71C0BB] to-[#334A81] text-white font-medium rounded-full hover:from-[#71C0BB]/80 hover:to-[#334A81]/80 transition-all duration-300 hover:scale-105 shadow-lg"
                                >
                                    Get In Touch
                                </a>
                                <a
                                    href="#work"
                                    className="px-6 py-3 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
                                >
                                    View My Work
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
