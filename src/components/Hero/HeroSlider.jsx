import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../../assets/images/hero/01.jpg';
import img2 from '../../assets/images/hero/02.jpg';
import img3 from '../../assets/images/hero/03.jpg';
import img4 from '../../assets/images/hero/04.jpg';

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const slides = [
        {
            id: 1,
            title: "Discover The",
            subtitle: "Benchmark of Excellence",
            largeText: true,
            image: img1
        },
        {
            id: 2,
            title: "Slider Caption 2",
            subtitle: "Slider Caption 2 Large Text Here",
            largeText: true,
            image: img2
        },
        {
            id: 3,
            title: "Slider Caption 3",
            subtitle: "Slider Caption 3 Large Text Here",
            largeText: true,
            image: img3
        },
        {
            id: 4,
            title: "Slider Caption 4",
            subtitle: "Slider Caption 4 Large Text Here",
            largeText: true,
            image: img4
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
                setIsAnimating(false);
            }, 1000);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const slideVariants = {
        enter: (direction) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0,
                scale: 0.8,
                top: '15vh',
                bottom: '15vh',
                left: '5%',
                right: '5%',
            };
        },
        center: {
            x: 0,
            opacity: 1,
            scale: 0.8,
            top: '15vh',
            bottom: '15vh',
            left: '5%',
            right: '5%',
            transition: {
                duration: 0.8
            }
        },
        zoom: {
            scale: 1,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            transition: {
                delay: 0.8,
                duration: 1.2,
                ease: "easeOut"
            }
        },
        exit: (direction) => {
            return {
                x: direction < 0 ? 1000 : -1000,
                opacity: 0,
                transition: {
                    duration: 0.8
                }
            };
        }
    };

    const textVariants = {
        hidden: { y: 150, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 1.5,
                duration: 0.8
            }
        }
    };

    const lineVariants = {
        hidden: { width: 0 },
        visible: {
            width: "100%",
            transition: {
                delay: 1.6,
                duration: 0.9
            }
        }
    };

    return (
        <section className="relative w-full h-[250px] md:h-screen">
            <div>
                <AnimatePresence custom={1} initial={false}>
                    <motion.div
                        key={slides[currentSlide].id}
                        className="absolute bg-cover bg-center flex items-center"
                        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                        custom={1}
                        variants={slideVariants}
                        initial="enter"
                        animate={["center", "zoom"]}
                        exit="exit"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>

                        <div className="w-full px-4 md:px-8">
                            <motion.div
                                className="relative max-w-4xl mx-auto"
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.h2
                                    className="text-white text-2xl md:text-3xl uppercase tracking-wider mb-2"
                                    variants={textVariants}
                                >
                                    {slides[currentSlide].title}
                                </motion.h2>

                                {slides[currentSlide].largeText ? (
                                    <motion.span
                                        className=" block text-white text-3xl md:text-6xl leading-tight"
                                        variants={textVariants}
                                    >
                                        {slides[currentSlide].subtitle}
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        className="block text-white text-2xl md:text-5xl mt-2"
                                        variants={textVariants}
                                    >
                                        {slides[currentSlide].subtitle}
                                    </motion.span>
                                )}

                                <motion.div
                                    className="absolute bottom-0 left-0 h-[1px] bg-white"
                                    variants={lineVariants}
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default HeroSlider;