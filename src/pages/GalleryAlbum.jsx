import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from 'aos';
import { useNavigate } from "react-router-dom";
import img1 from "../assets/images/news/1.jpg";
import img2 from "../assets/images/news/2.jpg";
import img3 from "../assets/images/news/3.jpg";
import InnerHero from "../components/Hero/InnerHero";

const GalleryAlbum = () => {
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
        document.title = "Gallery | EDIFICE";
        window.scrollTo(0, 0);
    }, []);
    const galleryItems = [
        {
            id: 1,
            imageSrc: img1,
            altText: "Gallery Image",
            title: "Penthouse Balcony View"
        },
        {
            id: 2,
            imageSrc: img2,
            altText: "Gallery Image",
            title: "Luxury Apartment Lobby"
        },
        {
            id: 3,
            imageSrc: img3,
            altText: "Gallery Image",
            title: "Modern Kitchen Design"
        }
    ];

    const handleGalleryClick = () => {
        navigate("/gallery");
    };

    return (
        <>
            <InnerHero
                subtitle="Our"
                title="GALLERY"
                backgroundImage=""
            />
            <section className="dark:bg-black dark:text-white bg-white text-black py-16 px-4 md:px-10 transition-colors duration-300 ease-in-out" data-aos="fade-up">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryItems.map((item) => (
                            <div
                                key={item.id}
                                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                                onClick={handleGalleryClick}
                            >
                                <motion.div
                                    className="w-full h-72 overflow-hidden"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                    <img
                                        src={item.imageSrc}
                                        alt={item.altText}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                <div className="absolute bottom-0 w-full bg-white/60 dark:bg-black/60  dark:text-white text-black text-center py-3 backdrop-blur-sm transition duration-300">
                                    <h3 className="text-lg font-semibold transition duration-300 group-hover:text-[#c20e35]">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default GalleryAlbum;