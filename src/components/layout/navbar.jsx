import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Menu } from "lucide-react";

import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className="flex items-center justify-between p-6 lg:px-12 relative z-10">
                <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm font-medium">
                        edanuurkorkmaz@gmail.com
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="#about"
                        className="text-sm font-medium hover:text-purple-400 transition-colors"
                    >
                        About me
                    </Link>
                    <Link
                        href="#skills"
                        className="text-sm font-medium hover:text-purple-400 transition-colors"
                    >
                        Skills
                    </Link>
                    <Link
                        href="#work"
                        className="text-sm font-medium hover:text-purple-400 transition-colors"
                    >
                        Work
                    </Link>
                    <Link
                        href="#contact"
                        className="text-sm font-medium hover:text-purple-400 transition-colors"
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-white hover:bg-white/10"
                >
                    <Menu className="h-5 w-5" />
                </Button>
            </nav>
            <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
                <Link
                    href="https://linkedin.com"
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                    <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                    href="https://github.com"
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                    <Github className="h-5 w-5" />
                </Link>
                <Link
                    href="https://twitter.com"
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                    <Twitter className="h-5 w-5" />
                </Link>
            </div>
        </>
    );
}
