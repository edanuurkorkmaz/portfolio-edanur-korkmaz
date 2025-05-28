"use client";
import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./wrapper";
import Div from "./div";

const AboutMe = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
    return (
        <div
            id="about"
            className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img
                className="sec-2-p-e-1"
                style={{ y: y1 }}
                src="sec-2-p-e-1.png"
            />
            <motion.img
                className="sec-2-p-e-2"
                style={{ y: y2 }}
                src="sec-2-p-e-2.png"
            />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* HEADING START */}
                <Div className="text-[40px] md:text-[90px] 2xl:text-[90px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
                    <span>A frontend developer</span>
                    <span className="flex items-center gap-2">
                        <span>Based</span>
                        <img
                            src="tr.jpg"
                            alt=""
                            className="w-[90px] h-[70px] rounded-lg"
                        />
                        <span>In Turkiye</span>
                    </span>
                </Div>
                {/* HEADING END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                    Hi! I'm Edanur Korkmaz, a passionate front-end developer
                    with a focus on creating clean, responsive, and
                    user-friendly web interfaces. I specialize in building
                    modern web applications using React, Next.js, Tailwind CSS,
                    and JavaScript.
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                    I studied Computer Programming (English) at Istanbul Aydın
                    University with a full scholarship and currently continue to
                    improve my skills through real-world projects and ongoing
                    education at Acunmedya Academy. I enjoy turning complex
                    problems into simple, elegant solutions and constantly
                    strive to stay up-to-date with the latest front-end trends
                    and tools. Whether I'm building landing pages or dynamic
                    interfaces, I aim for performance, accessibility, and great
                    user experience.
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
                    When I’m not coding, you can find me playing video games or
                    dancing — creativity fuels my work both in and out of the
                    editor. Let’s build something amazing together!
                </Div>
                {/* PARAGRAPH END */}
            </Wrapper>
        </div>
    );
};

export default AboutMe;
