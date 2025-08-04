import React, { useEffect } from 'react';
import { motion } from 'framer-motion'; // Added motion import
import news1 from "../assets/images/news/1.jpg";
import news2 from "../assets/images/news/2.jpg";
import news3 from "../assets/images/news/3.jpg";
import news4 from "../assets/images/news/4.jpg";
import news5 from "../assets/images/news/5.jpg";
import news6 from "../assets/images/news/6.jpg";
import InnerHero from '../components/Hero/InnerHero';
import AOS from 'aos';

export const newsItems = [
    {
        id: 1,
        image: news1,
        date: "June 30, 2025",
        title: "Exciting Updates on Our Latest Projects",
        link: "/news/1"
    },
    {
        id: 2,
        image: news2,
        date: "June 28, 2025",
        title: "Construction Milestones Reached",
        link: "/news/2"
    },
    {
        id: 3,
        image: news3,
        date: "June 25, 2025",
        title: "CEO's Future Development Vision",
        link: "/news/3"
    },
    {
        id: 4,
        image: news4,
        date: "June 22, 2025",
        title: "New Green Building Initiative",
        link: "/news/4"
    },
    {
        id: 5,
        image: news5,
        date: "June 20, 2025",
        title: "Award-Winning Design Recognized",
        link: "/news/5"
    },
    {
        id: 6,
        image: news6,
        date: "June 18, 2025",
        title: "Community Program Update",
        link: "/news/6"
    }
];
const News = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
        });
        document.title = "News | EDIFICE";
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <InnerHero
                subtitle="Latest Releases"
                title="News and events"
                backgroundImage=""
            />

            <section data-aos="fade-up" className="py-16 bg-gray-100 text-black dark:bg-black dark:text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsItems.map((item) => (
                            <div key={item.id} className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                                <a href={item.link} className="block">
                                    <div className="overflow-hidden h-60">
                                        <motion.div
                                            className="w-full h-full"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                            {item.date}
                                        </p>
                                        <h3 className="text-xl font-semibold text-black dark:text-white transition duration-300 group-hover:text-[#c20e35]">
                                            {item.title}
                                        </h3>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default News;