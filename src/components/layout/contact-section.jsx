"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
    Mail,
    MapPin,
    Send,
    CheckCircle,
    AlertCircle,
    Clock,
    User,
} from "lucide-react";
import { contactInfo, personalInfo } from "@/app/data/portfolio-data";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errors, setErrors] = useState({});

    // EmailJS Configuration
    const EMAILJS_CONFIG = {
        serviceId:
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_0ntwuhc",
        templateId:
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_emrgclc",
        publicKey:
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "LMRVez-qpQWsbrI6P",
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters long";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("EmailJS Config:", EMAILJS_CONFIG);

        if (!validateForm()) {
            return;
        }

        // Check if EmailJS is configured
        if (
            !EMAILJS_CONFIG.serviceId ||
            !EMAILJS_CONFIG.templateId ||
            !EMAILJS_CONFIG.publicKey ||
            EMAILJS_CONFIG.serviceId === "your_service_id"
        ) {
            console.warn(
                "EmailJS not configured. Please set up your EmailJS credentials."
            );
            setSubmitStatus("error");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Send email using EmailJS
            const result = await emailjs.sendForm(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                form.current,
                EMAILJS_CONFIG.publicKey
            );

            console.log("Email sent successfully:", result.text);
            setSubmitStatus("success");

            // Reset form
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error("Failed to send email:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactMethods = [
        {
            icon: Mail,
            label: "Email",
            value: contactInfo.email,
            href: `mailto:${contactInfo.email}`,
            description: "Send me an email",
        },
        {
            icon: MapPin,
            label: "Location",
            value: contactInfo.location,
            href: "#",
            description: "Based in",
        },
    ];

    return (
        <section
            id="contact"
            className="py-20 bg-gradient-to-b from-transparent to-[#2A305F]/20 relative"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#71C0BB]/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#334A81]/5 rounded-full blur-2xl"></div>
                <div className="absolute top-3/4 left-1/2 w-24 h-24 bg-[#2A305F]/5 rounded-full blur-xl"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Get In{" "}
                        <span className="bg-gradient-to-r from-[#71C0BB] to-[#334A81] bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        Ready to bring your ideas to life? Let's discuss your
                        project and create something amazing together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-[1fr,1.2fr] gap-16 items-start">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Contact Methods */}
                        <div className="space-y-6">
                            {contactMethods.map((method, index) => {
                                const IconComponent = method.icon;
                                return (
                                    <a
                                        key={index}
                                        href={method.href}
                                        className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                                    >
                                        <div className="p-3 bg-gradient-to-r from-[#71C0BB] to-[#334A81] rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-white/60">
                                                {method.description}
                                            </div>
                                            <div className="font-semibold text-white text-lg">
                                                {method.value}
                                            </div>
                                            <div className="text-sm text-[#71C0BB]">
                                                {method.label}
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>

                        {/* Availability Info */}
                        <div className="bg-gradient-to-r from-[#71C0BB]/10 to-[#334A81]/10 backdrop-blur-sm rounded-2xl p-6 border border-[#71C0BB]/20">
                            <div className="flex items-center gap-3 mb-4">
                                <Clock className="w-5 h-5 text-[#71C0BB]" />
                                <h3 className="font-semibold text-white">
                                    Availability
                                </h3>
                            </div>
                            <p className="text-white/80 mb-2">
                                {contactInfo.availability}
                            </p>
                            <p className="text-sm text-white/60">
                                {contactInfo.responseTime}
                            </p>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                <div className="text-2xl font-bold text-[#71C0BB] mb-1">
                                    {personalInfo.stats.projects}
                                </div>
                                <div className="text-xs text-white/70">
                                    Projects Completed
                                </div>
                            </div>
                            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                <div className="text-2xl font-bold text-[#71C0BB] mb-1">
                                    24h
                                </div>
                                <div className="text-xs text-white/70">
                                    Response Time
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                        <div className="flex items-center gap-3 mb-8">
                            <User className="w-6 h-6 text-[#71C0BB]" />
                            <h3 className="text-2xl font-bold text-white">
                                Send Message
                            </h3>
                        </div>

                        <form
                            ref={form}
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            {/* Name Field */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-white/80 mb-2"
                                >
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="from_name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            name: e.target.value,
                                        }))
                                    }
                                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                                        errors.name
                                            ? "border-red-400 focus:ring-red-400/50"
                                            : "border-white/20 focus:border-[#71C0BB] focus:ring-[#71C0BB]/50"
                                    }`}
                                    placeholder="Enter your full name"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-white/80 mb-2"
                                >
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="from_email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            email: e.target.value,
                                        }))
                                    }
                                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                                        errors.email
                                            ? "border-red-400 focus:ring-red-400/50"
                                            : "border-white/20 focus:border-[#71C0BB] focus:ring-[#71C0BB]/50"
                                    }`}
                                    placeholder="Enter your email address"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Subject Field */}
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-white/80 mb-2"
                                >
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={(e) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            subject: e.target.value,
                                        }))
                                    }
                                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                                        errors.subject
                                            ? "border-red-400 focus:ring-red-400/50"
                                            : "border-white/20 focus:border-[#71C0BB] focus:ring-[#71C0BB]/50"
                                    }`}
                                    placeholder="What's this about?"
                                />
                                {errors.subject && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {errors.subject}
                                    </p>
                                )}
                            </div>

                            {/* Message Field */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-white/80 mb-2"
                                >
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            message: e.target.value,
                                        }))
                                    }
                                    rows={5}
                                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                                        errors.message
                                            ? "border-red-400 focus:ring-red-400/50"
                                            : "border-white/20 focus:border-[#71C0BB] focus:ring-[#71C0BB]/50"
                                    }`}
                                    placeholder="Tell me about your project or idea..."
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            {/* Hidden fields for EmailJS */}
                            <input
                                type="hidden"
                                name="to_name"
                                value={personalInfo.name}
                            />
                            <input
                                type="hidden"
                                name="to_email"
                                value={personalInfo.email}
                            />

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="cursor-pointer w-full bg-gradient-to-r from-[#71C0BB] to-[#334A81] hover:from-[#71C0BB]/80 hover:to-[#334A81]/80 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Sending...
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <Send className="w-4 h-4" />
                                        Send Message
                                    </div>
                                )}
                            </Button>

                            {/* Status Messages */}
                            {submitStatus === "success" && (
                                <div
                                    className="flex items-center gap-2 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl"
                                    aria-live="polite"
                                >
                                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                                    <div>
                                        <p className="text-emerald-400 font-medium">
                                            Message sent successfully!
                                        </p>
                                        <p className="text-emerald-400/80 text-sm">
                                            I'll get back to you within 24
                                            hours.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {submitStatus === "error" && (
                                <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                                    <AlertCircle className="w-5 h-5 text-red-400" />
                                    <div>
                                        <p className="text-red-400 font-medium">
                                            Failed to send message
                                        </p>
                                        <p className="text-red-400/80 text-sm">
                                            Please try again or contact me
                                            directly at{" "}
                                            <a
                                                href={`mailto:${contactInfo.email}`}
                                                className="underline"
                                            >
                                                {contactInfo.email}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-[#2A305F]/20 to-[#334A81]/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                            Whether you need a complete website, a web
                            application, or just want to discuss your ideas, I'm
                            here to help bring your vision to life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="px-6 py-3 bg-gradient-to-r from-[#71C0BB] to-[#334A81] text-white font-medium rounded-full hover:from-[#71C0BB]/80 hover:to-[#334A81]/80 transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                Email Me Directly
                            </a>
                            <a
                                href="https://github.com/edanuurkorkmaz"
                                target="_blank"
                                className="px-6 py-3 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
                            >
                                View My Work
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
