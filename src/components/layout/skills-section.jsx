"use client";

import { useState, useEffect } from "react";
import {
    skills,
    skillCategories,
    personalInfo,
} from "@/app/data/portfolio-data";

const categories = skillCategories;

export default function SkillsSection() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [animatedSkills, setAnimatedSkills] = useState(
        new Array(skills.length).fill(false)
    );

    const filteredSkills =
        selectedCategory === "All"
            ? skills
            : skills.filter((skill) => skill.category === selectedCategory);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedSkills(new Array(skills.length).fill(true));
        }, 500);

        return () => clearTimeout(timer);
    }, [selectedCategory]);

    return (
        <section
            id="skills"
            className="py-20 bg-gradient-to-b from-transparent to-[#2A305F]/20 relative"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#71C0BB]/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-[#334A81]/5 rounded-full blur-2xl"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        My{" "}
                        <span className="bg-gradient-to-r from-[#71C0BB] to-[#334A81] bg-clip-text text-transparent">
                            Skills
                        </span>
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life and
                        create exceptional web experiences
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                selectedCategory === category
                                    ? "bg-gradient-to-r from-[#71C0BB] to-[#334A81] text-white shadow-lg scale-105"
                                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {skills
                        .filter(
                            (skill) =>
                                selectedCategory === "All" ||
                                skill.category === selectedCategory
                        )
                        .map((skill, index) => {
                            const IconComponent = skill.icon;
                            return (
                                <div
                                    key={skill.name}
                                    className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/10"
                                >
                                    {/* Skill Header */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div
                                            className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white text-lg">
                                                {skill.name}
                                            </h3>
                                            <span className="text-sm text-white/60">
                                                {skill.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Hover Effect Indicator */}
                                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="flex items-center gap-2 text-xs text-[#71C0BB]">
                                            <div className="w-2 h-2 bg-[#71C0BB] rounded-full animate-pulse"></div>
                                            <span>Actively using</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>

                {/* Skills Summary */}
                <div className="mt-16 text-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-[#71C0BB]">
                                {personalInfo.stats.technologies}
                            </div>
                            <div className="text-sm text-white/70">
                                Technologies
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-[#71C0BB]">
                                {personalInfo.stats.projects}
                            </div>
                            <div className="text-sm text-white/70">
                                Projects Built
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-[#71C0BB]">
                                {personalInfo.stats.experience}
                            </div>
                            <div className="text-sm text-white/70">
                                Years Experience
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-[#71C0BB]">
                                {personalInfo.stats.passion}
                            </div>
                            <div className="text-sm text-white/70">Passion</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
