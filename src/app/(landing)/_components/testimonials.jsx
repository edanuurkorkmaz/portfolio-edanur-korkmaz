"use client";
import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./wrapper";
import Div from "./div";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "@/app/slider.css";

const Testimonials = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 4500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 4500], [2000, 0], { clamp: false });
    return (
        <div className="w-full py-[50px] md:py-[100px] bg-white relative overflow-hidden">
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img
                className="sec-4-p-e-1 rellax"
                style={{ y: y1 }}
                src="/sec-4-p-e-1.png"
            />
            <motion.img
                className="sec-4-p-e-2 rellax"
                style={{ y: y2 }}
                src="/sec-4-p-e-2.png"
            />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* SECTION HEADING START */}
                <Div className="mb-10 relative">
                    <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-2 text-[#111111]">
                        Client Says
                    </div>
                    <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                        Hear what my satisfied clients have to say!
                    </div>
                </Div>
                {/* SECTION HEADING END */}

                {/* CAROUSEL START */}
                <Div className="bg-[#F2F2F2] w-full md:w-[834px] rounded-[20px] mx-auto relative mb-[50px]">
                    <Carousel>
                        {/* SLIDE START */}
                        <div className="text-black flex items-center flex-col px-[25px] md:px-[50px] py-[50px]">
                            <div className="mb-[25px]">
                                <img
                                    src="https://placehold.co/80"
                                    alt="Client"
                                    className="w-[80px] h-[80px] max-w-[80px] rounded-full"
                                />
                                <div className="font-bold">John Doe</div>
                                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                                    Client
                                </div>
                            </div>
                            <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                                "Edanur Korkmaz has been an outstanding
                                collaborator over the past two years. Her
                                expertise in front-end development, particularly
                                with React, Tailwind, and JavaScript, has been
                                instrumental to the success of our projects. She
                                consistently delivers high-quality work,
                                demonstrates strong problem-solving skills, and
                                brings professionalism and creativity to every
                                task. I highly recommend her for any
                                development-focused role or collaboration."
                            </div>
                        </div>
                    </Carousel>
                </Div>
            </Wrapper>
        </div>
    );
};

export default Testimonials;
