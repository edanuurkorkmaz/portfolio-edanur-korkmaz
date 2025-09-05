"use client";

import { useState, useEffect } from "react";
import {
    ExternalLink,
    Github,
    Calendar,
    Tag,
    Eye,
    Code,
    Filter,
    Search,
    ArrowRight,
} from "lucide-react";
import { projects, projectCategories } from "@/app/data/portfolio-data";
import Image from "next/image";

export default function ProjectsSection() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filteredProjects, setFilteredProjects] = useState(projects);

    // Filter projects based on category and search term
    useEffect(() => {
        let filtered = projects;

        // Filter by category
        if (selectedCategory !== "All") {
            filtered = filtered.filter(
                (project) => project.category === selectedCategory
            );
        }

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(
                (project) =>
                    project.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    project.description
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    project.technologies.some((tech) =>
                        tech.toLowerCase().includes(searchTerm.toLowerCase())
                    )
            );
        }

        setFilteredProjects(filtered);
    }, [selectedCategory, searchTerm]);

    const openProjectModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeProjectModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
        document.body.style.overflow = "unset";
    };

    const featuredProjects = projects.filter((project) => project.featured);

    return (
        <section
            id="work"
            className="py-20 bg-gradient-to-b from-[#2A305F]/20 to-transparent relative"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#71C0BB]/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-[#334A81]/5 rounded-full blur-2xl"></div>
                <div className="absolute top-3/4 right-1/3 w-24 h-24 bg-[#2A305F]/5 rounded-full blur-xl"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        My{" "}
                        <span className="bg-gradient-to-r from-[#71C0BB] to-[#334A81] bg-clip-text text-transparent">
                            Work
                        </span>
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        A showcase of projects I've built with passion,
                        creativity, and cutting-edge technologies
                    </p>
                </div>

                {/* Featured Projects */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <div className="w-1 h-8 bg-gradient-to-b from-[#71C0BB] to-[#334A81] rounded-full"></div>
                        Featured Projects
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                                onClick={() => openProjectModal(project)}
                            >
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={
                                            project.image ||
                                            `/placeholder.svg?height=200&width=400&text=${project.title}`
                                        }
                                        alt={project.title}
                                        width={400}
                                        height={200}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Overlay Icons */}
                                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {project.liveUrl && (
                                            <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                                                <ExternalLink className="w-4 h-4 text-white" />
                                            </div>
                                        )}
                                        {project.githubUrl && (
                                            <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                                                <Github className="w-4 h-4 text-white" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Status Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                project.status === "completed"
                                                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                                    : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                                            }`}
                                        >
                                            {project.status === "completed"
                                                ? "Completed"
                                                : "In Progress"}
                                        </span>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Calendar className="w-4 h-4 text-[#71C0BB]" />
                                        <span className="text-sm text-white/60">
                                            {project.year}
                                        </span>
                                        <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                                        <Tag className="w-4 h-4 text-[#71C0BB]" />
                                        <span className="text-sm text-white/60">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#71C0BB] transition-colors duration-300">
                                        {project.title}
                                    </h4>

                                    <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies
                                            .slice(0, 3)
                                            .map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-[#71C0BB]/10 text-[#71C0BB] text-xs rounded-full border border-[#71C0BB]/20"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-2 py-1 bg-white/10 text-white/60 text-xs rounded-full">
                                                +
                                                {project.technologies.length -
                                                    3}
                                            </span>
                                        )}
                                    </div>

                                    {/* View Details */}
                                    <div className="flex items-center gap-2 text-[#71C0BB] text-sm font-medium group-hover:gap-3 transition-all duration-300">
                                        <Eye className="w-4 h-4" />
                                        <span>View Details</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Filters and Search */}
                <div className="mb-12">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full lg:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#71C0BB] focus:ring-2 focus:ring-[#71C0BB]/50 transition-all duration-300"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex items-center gap-2">
                            <Filter className="w-4 h-4 text-white/60" />
                            <div className="flex flex-wrap gap-2">
                                {projectCategories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() =>
                                            setSelectedCategory(category)
                                        }
                                        className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                                            selectedCategory === category
                                                ? "bg-gradient-to-r from-[#71C0BB] to-[#334A81] text-white shadow-lg scale-105"
                                                : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* All Projects Grid */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <div className="w-1 h-8 bg-gradient-to-b from-[#71C0BB] to-[#334A81] rounded-full"></div>
                        All Projects
                        <span className="text-lg text-white/60 font-normal">
                            ({filteredProjects.length})
                        </span>
                    </h3>

                    {filteredProjects.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-white/50" />
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-2">
                                No projects found
                            </h4>
                            <p className="text-white/60">
                                Try adjusting your search or filter criteria
                            </p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProjects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                                    onClick={() => openProjectModal(project)}
                                >
                                    {/* Project Image */}
                                    <div className="relative h-40 overflow-hidden">
                                        <Image
                                            src={
                                                project.image ||
                                                `/placeholder.svg?height=160&width=320&text=${project.title}`
                                            }
                                            alt={project.title}
                                            width={320}
                                            height={160}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-5">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xs text-[#71C0BB]">
                                                {project.year}
                                            </span>
                                            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                                            <span className="text-xs text-white/60">
                                                {project.category}
                                            </span>
                                        </div>

                                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#71C0BB] transition-colors duration-300">
                                            {project.title}
                                        </h4>

                                        <p className="text-white/70 text-sm leading-relaxed mb-3 line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-1 mb-3">
                                            {project.technologies
                                                .slice(0, 2)
                                                .map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-2 py-1 bg-[#71C0BB]/10 text-[#71C0BB] text-xs rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            {project.technologies.length >
                                                2 && (
                                                <span className="px-2 py-1 bg-white/10 text-white/60 text-xs rounded-full">
                                                    +
                                                    {project.technologies
                                                        .length - 2}
                                                </span>
                                            )}
                                        </div>

                                        {/* Action Links */}
                                        <div className="flex items-center gap-3">
                                            {project.liveUrl && (
                                                <div className="flex items-center gap-1 text-[#71C0BB] text-xs">
                                                    <ExternalLink className="w-3 h-3" />
                                                    <span>Live</span>
                                                </div>
                                            )}
                                            {project.githubUrl && (
                                                <div className="flex items-center gap-1 text-[#71C0BB] text-xs">
                                                    <Github className="w-3 h-3" />
                                                    <span>Code</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-[#2A305F]/20 to-[#334A81]/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Interested in Working Together?
                        </h3>
                        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                            I'm always excited to take on new challenges and
                            bring innovative ideas to life. Let's discuss your
                            next project!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-gradient-to-r from-[#71C0BB] to-[#334A81] text-white font-medium rounded-full hover:from-[#71C0BB]/80 hover:to-[#334A81]/80 transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                Start a Project
                            </a>
                            <a
                                href="https://github.com/edanur-korkmaz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center gap-2"
                            >
                                <Github className="w-4 h-4" />
                                View GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Modal */}
            {isModalOpen && selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={closeProjectModal}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-[#2A305F]/90 backdrop-blur-md rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
                        {/* Close Button */}
                        <button
                            onClick={closeProjectModal}
                            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300 z-10"
                        >
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* Modal Header */}
                        <div className="relative h-64 overflow-hidden rounded-t-3xl">
                            <Image
                                src={
                                    selectedProject.image ||
                                    `/placeholder.svg?height=256&width=800&text=${selectedProject.title}`
                                }
                                alt={selectedProject.title}
                                width={800}
                                height={256}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2A305F]/80 to-transparent"></div>

                            {/* Project Title Overlay */}
                            <div className="absolute bottom-6 left-6 right-16">
                                <div className="flex items-center gap-2 mb-2">
                                    <Calendar className="w-4 h-4 text-[#71C0BB]" />
                                    <span className="text-sm text-white/80">
                                        {selectedProject.year}
                                    </span>
                                    <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                                    <Tag className="w-4 h-4 text-[#71C0BB]" />
                                    <span className="text-sm text-white/80">
                                        {selectedProject.category}
                                    </span>
                                </div>
                                <h3 className="text-3xl font-bold text-white">
                                    {selectedProject.title}
                                </h3>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-8">
                            {/* Description */}
                            <div className="mb-8">
                                <h4 className="text-xl font-semibold text-white mb-4">
                                    About This Project
                                </h4>
                                <p className="text-white/80 leading-relaxed">
                                    {selectedProject.longDescription}
                                </p>
                            </div>

                            {/* Technologies */}
                            <div className="mb-8">
                                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                    <Code className="w-5 h-5 text-[#71C0BB]" />
                                    Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {selectedProject.technologies.map(
                                        (tech, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 bg-gradient-to-r from-[#71C0BB]/20 to-[#334A81]/20 text-white rounded-full border border-[#71C0BB]/30 font-medium"
                                            >
                                                {tech}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                {selectedProject.liveUrl && (
                                    <a
                                        href={selectedProject.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#71C0BB] to-[#334A81] text-white font-medium rounded-full hover:from-[#71C0BB]/80 hover:to-[#334A81]/80 transition-all duration-300 hover:scale-105 shadow-lg"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        View Live Project
                                    </a>
                                )}
                                {selectedProject.githubUrl && (
                                    <a
                                        href={selectedProject.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
                                    >
                                        <Github className="w-4 h-4" />
                                        View Source Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
