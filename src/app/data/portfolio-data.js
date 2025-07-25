import {
    Code,
    Database,
    Palette,
    Smartphone,
    Globe,
    Zap,
    MapPin,
    Heart,
    Coffee,
    BookOpen,
    Award,
    Lightbulb,
    Target,
    Code2,
} from "lucide-react";

// Personal Information
export const personalInfo = {
    name: "Edanur Korkmaz",
    title: "Frontend Developer",
    email: "edanuurkorkmaz@gmail.com",
    location: "Turkey",
    avatar: "./eda-2.png",
    tagline: "I AM A FRONTEND DEVELOPER",
    description:
        "a front-end developer focused on building responsive and modern web interfaces using React, Next.js, and Tailwind CSS. I enjoy creating clean, user-friendly designs and constantly improving my skills through real-world projects and continuous learning.",
    stats: {
        projects: "25+",
        experience: "1+",
        technologies: "8+",
        passion: "100%",
    },
};

// Social Media Links
export const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/edanur-korkmaz/",
        icon: "linkedin",
    },
    {
        name: "GitHub",
        url: "https://github.com/edanuurkorkmaz",
        icon: "github",
    },
    {
        name: "Twitter",
        url: "https://x.com/edanuurkorkmaz",
        icon: "twitter",
    },
];

// Navigation Items
export const navigationItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About me" },
    { href: "#skills", label: "Skills" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
];

// Skills Data
export const skills = [
    {
        name: "React",
        level: 90,
        category: "Frontend",
        icon: Code,
        color: "from-blue-400 to-blue-600",
        description:
            "Building dynamic user interfaces with hooks, context, and modern patterns",
    },
    {
        name: "Next.js",
        level: 85,
        category: "Frontend",
        icon: Globe,
        color: "from-slate-600 to-slate-800",
        description:
            "Full-stack React framework with SSR, API routes, and optimizations",
    },
    {
        name: "Tailwind CSS",
        level: 95,
        category: "Styling",
        icon: Palette,
        color: "from-cyan-400 to-teal-500",
        description: "Utility-first CSS framework for rapid UI development",
    },
    {
        name: "JavaScript",
        level: 88,
        category: "Programming",
        icon: Zap,
        color: "from-yellow-400 to-amber-500",
        description:
            "Modern ES6+ JavaScript with async/await, modules, and DOM manipulation",
    },
    {
        name: "TypeScript",
        level: 82,
        category: "Programming",
        icon: Code,
        color: "from-blue-500 to-indigo-600",
        description:
            "Type-safe JavaScript development with interfaces and generics",
    },
    {
        name: "Responsive Design",
        level: 92,
        category: "Design",
        icon: Smartphone,
        color: "from-emerald-400 to-teal-500",
        description: "Mobile-first design approach with CSS Grid and Flexbox",
    },
    {
        name: "Git & GitHub",
        level: 80,
        category: "Tools",
        icon: Database,
        color: "from-violet-400 to-purple-600",
        description:
            "Version control, branching strategies, and collaborative development",
    },
    {
        name: "UI/UX Design",
        level: 75,
        category: "Design",
        icon: Palette,
        color: "from-pink-400 to-rose-500",
        description:
            "User-centered design principles and modern interface patterns",
    },
];

export const skillCategories = [
    "All",
    "Frontend",
    "Programming",
    "Styling",
    "Design",
    "Tools",
];

// Personal Facts
export const personalFacts = [
    {
        icon: MapPin,
        label: "Location",
        value: "Turkey",
        description:
            "Based in beautiful Turkey, working remotely with global teams",
    },
    {
        icon: Heart,
        label: "Passion",
        value: "Clean Code & UX",
        description:
            "I believe great code should be as beautiful as the interfaces it creates",
    },
    {
        icon: Coffee,
        label: "Fuel",
        value: "Coffee & Curiosity",
        description: "Powered by endless curiosity and way too much coffee",
    },
    {
        icon: BookOpen,
        label: "Learning",
        value: "Always Growing",
        description: "Constantly exploring new technologies and best practices",
    },
];

// Professional Journey
export const journeySteps = [
    {
        year: "2023",
        title: "Frontend Developer Journey Begins",
        description:
            "Started my journey into web development, discovering my passion for creating beautiful, functional user interfaces.",
        icon: Code2,
        color: "from-violet-400 to-purple-600",
    },
    {
        year: "2023",
        title: "React & Modern Web Technologies",
        description:
            "Mastered React, Next.js, and Tailwind CSS. Built my first responsive web applications and fell in love with component-based architecture.",
        icon: Lightbulb,
        color: "from-blue-400 to-indigo-600",
    },
    {
        year: "2024",
        title: "Professional Projects & Growth",
        description:
            "Completed 25+ projects, focusing on user experience and modern design principles. Continuously learning and improving my craft.",
        icon: Target,
        color: "from-teal-400 to-cyan-500",
    },
    {
        year: "Present",
        title: "Building the Future",
        description:
            "Currently seeking opportunities to contribute to innovative projects and collaborate with amazing teams to create exceptional web experiences.",
        icon: Award,
        color: "from-emerald-400 to-teal-600",
    },
];

// Projects Data
export const projects = [
    {
        id: "ecommerce-dashboard",
        title: "E-Commerce Dashboard",
        description:
            "Modern admin dashboard for e-commerce management with real-time analytics and inventory tracking.",
        longDescription:
            "A comprehensive e-commerce admin dashboard built with Next.js and TypeScript. Features include real-time sales analytics, inventory management, order processing, and customer insights. The dashboard uses Chart.js for data visualization and includes a responsive design that works seamlessly across all devices.",
        image: "/images/projects/ecommerce-dashboard.jpg",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Chart.js",
            "Prisma",
        ],
        category: "Web Application",
        liveUrl: "https://ecommerce-dashboard-demo.vercel.app",
        githubUrl: "https://github.com/edanur-korkmaz/ecommerce-dashboard",
        featured: true,
        status: "completed",
        year: 2024,
    },
    {
        id: "task-management-app",
        title: "Task Management App",
        description:
            "Collaborative task management application with drag-and-drop functionality and team collaboration features.",
        longDescription:
            "A full-featured task management application inspired by Trello and Asana. Built with React and includes drag-and-drop functionality, real-time collaboration, file attachments, and team management. The app features a clean, intuitive interface and supports multiple project views including Kanban boards and list views.",
        image: "/images/projects/task-management.jpg",
        technologies: [
            "React",
            "Node.js",
            "Socket.io",
            "MongoDB",
            "Tailwind CSS",
        ],
        category: "Web Application",
        liveUrl: "https://taskflow-app.vercel.app",
        githubUrl: "https://github.com/edanur-korkmaz/task-management",
        featured: true,
        status: "completed",
        year: 2024,
    },
    {
        id: "portfolio-website",
        title: "Personal Portfolio Website",
        description:
            "Responsive portfolio website showcasing projects and skills with modern animations and interactions.",
        longDescription:
            "My personal portfolio website built with Next.js and Tailwind CSS. Features smooth scrolling, interactive animations, and a modern design. The site is fully responsive and optimized for performance with lazy loading and image optimization.",
        image: "/images/projects/portfolio.jpg",
        technologies: [
            "Next.js",
            "Tailwind CSS",
            "Framer Motion",
            "TypeScript",
        ],
        category: "Portfolio",
        liveUrl: "https://edanur-korkmaz.vercel.app",
        githubUrl: "https://github.com/edanur-korkmaz/portfolio",
        featured: true,
        status: "completed",
        year: 2024,
    },
    {
        id: "weather-app",
        title: "Weather Forecast App",
        description:
            "Beautiful weather application with location-based forecasts and interactive weather maps.",
        longDescription:
            "A modern weather application that provides detailed weather forecasts, interactive maps, and location-based weather data. Built with React and integrates with multiple weather APIs for accurate forecasting. Features include hourly and weekly forecasts, weather alerts, and a beautiful, intuitive interface.",
        image: "/images/projects/weather-app.jpg",
        technologies: ["React", "Weather API", "CSS Modules", "Chart.js"],
        category: "Web Application",
        liveUrl: "https://weather-forecast-app.vercel.app",
        githubUrl: "https://github.com/edanur-korkmaz/weather-app",
        featured: false,
        status: "completed",
        year: 2023,
    },
    {
        id: "blog-platform",
        title: "Blog Platform",
        description:
            "Full-stack blog platform with content management, user authentication, and comment system.",
        longDescription:
            "A complete blog platform built with Next.js and includes user authentication, content management, rich text editing, and a comment system. The platform supports multiple authors, categories, tags, and SEO optimization. Features a clean, readable design optimized for content consumption.",
        image: "/images/projects/blog-platform.jpg",
        technologies: [
            "Next.js",
            "Prisma",
            "NextAuth.js",
            "Tailwind CSS",
            "PostgreSQL",
        ],
        category: "Web Application",
        githubUrl: "https://github.com/edanur-korkmaz/blog-platform",
        featured: false,
        status: "in-progress",
        year: 2024,
    },
    {
        id: "recipe-finder",
        title: "Recipe Finder App",
        description:
            "Recipe discovery app with ingredient-based search and meal planning features.",
        longDescription:
            "A recipe discovery application that helps users find recipes based on available ingredients. Features include ingredient-based search, nutritional information, meal planning, and shopping list generation. Built with React and integrates with recipe APIs for comprehensive recipe data.",
        image: "/images/projects/recipe-finder.jpg",
        technologies: ["React", "Recipe API", "Local Storage", "Tailwind CSS"],
        category: "Web Application",
        liveUrl: "https://recipe-finder-app.vercel.app",
        githubUrl: "https://github.com/edanur-korkmaz/recipe-finder",
        featured: false,
        status: "completed",
        year: 2023,
    },
];

export const projectCategories = [
    "All",
    "Web Application",
    "Portfolio",
    "Mobile App",
];

// Contact Information
export const contactInfo = {
    email: "edanuurkorkmaz@gmail.com",
    phone: "+90 XXX XXX XX XX",
    location: "Turkey",
    availability: "Available for freelance and full-time opportunities",
    responseTime: "Usually responds within 24 hours",
};

// Testimonials (if you have any)
export const testimonials = [
    {
        id: "1",
        name: "Client Name",
        role: "Project Manager",
        company: "Tech Company",
        content:
            "Edanur delivered exceptional work on our project. Her attention to detail and technical skills are outstanding.",
        avatar: "/images/testimonials/client1.jpg",
        rating: 5,
    },
    // Add more testimonials as needed
];

// Resume/CV Data
export const resumeData = {
    education: [
        {
            degree: "Computer Science",
            school: "University Name",
            year: "2020-2024",
            description:
                "Focused on web development and software engineering principles",
        },
    ],
    experience: [
        {
            title: "Frontend Developer",
            company: "Freelance",
            period: "2023 - Present",
            description:
                "Developing modern web applications using React, Next.js, and Tailwind CSS",
        },
    ],
    certifications: [
        {
            name: "React Developer Certification",
            issuer: "Meta",
            year: "2023",
        },
    ],
};

// SEO and Meta Data
export const seoData = {
    title: "Edanur Korkmaz - Frontend Developer",
    description:
        "Frontend Developer specializing in React, Next.js, and Tailwind CSS. Creating modern, responsive web applications with clean code and exceptional user experiences.",
    keywords: [
        "Frontend Developer",
        "React",
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
        "Web Development",
    ],
    author: "Edanur Korkmaz",
    url: "https://edanurkorkmaz.com",
    image: "/images/og-image.jpg",
};
