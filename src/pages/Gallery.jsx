import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import InnerHero from '../components/Hero/InnerHero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from "../assets/images/news/1.jpg";
import img2 from "../assets/images/news/2.jpg";
import img3 from "../assets/images/news/3.jpg";

const Gallery = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState([]);

    const images = [
        { src: img1, alt: 'Luxury Apartment Lobby' },
        { src: img2, alt: 'Modern Kitchen Design' },
        { src: img3, alt: 'Penthouse Balcony View' },
    ];

    useEffect(() => {
        const loadImage = (src) =>
            new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve(src);
                img.onerror = () => reject(src);
            });

        Promise.all(images.map((image) => loadImage(image.src)))
            .then(() => setLoadedImages(images))
            .catch(console.error);
    }, []);
    useEffect(() => {
        document.title = "Gallery | EDIFICE";
        window.scrollTo(0, 0);
        AOS.init({ duration: 800, easing: 'ease-in-out', once: true });

        if (location.state?.imageIndex) {
            setCurrentImageIndex(location.state.imageIndex);
            setIsModalOpen(true);
            document.body.style.overflow = 'hidden';
        }
    }, [location.state]);

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
        navigate(location.pathname, { replace: true });
    };

    const navigateImage = (direction) => {
        setCurrentImageIndex((prevIndex) =>
            direction === 'prev'
                ? (prevIndex - 1 + loadedImages.length) % loadedImages.length
                : (prevIndex + 1) % loadedImages.length
        );
    };
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isModalOpen) return;
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') navigateImage('prev');
            if (e.key === 'ArrowRight') navigateImage('next');
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isModalOpen]);

    return (
        <>
            <div className='relative z-0'>
                <InnerHero subtitle="Our" title="GALLERY" backgroundImage="" />
            </div>

            <section
                data-aos="fade-up"
                className="relative z-0 bg-white text-black dark:bg-black dark:text-white py-16 px-4 md:px-10 transition-colors duration-300 ease-in-out"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {loadedImages.map((image, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                                onClick={() => openModal(index)}
                            >
                                <motion.div
                                    className="w-full h-72 overflow-hidden"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </motion.div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center"
                    onClick={closeModal}
                >
                    <button
                        className="absolute top-6 right-6 text-white text-3xl hover:text-[#c20e35] focus:outline-none"
                        onClick={(e) => {
                            e.stopPropagation();
                            closeModal();
                        }}
                        aria-label="Close modal"
                    >
                        &times;
                    </button>
                    <button
                        className="absolute left-6 text-white text-4xl hover:text-[#c20e35] focus:outline-none"
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateImage('prev');
                        }}
                        aria-label="Previous image"
                    >
                        ❮
                    </button>
                    <div className="relative max-w-[90vw] max-h-[90vh]">
                        <img
                            src={loadedImages[currentImageIndex]?.src}
                            alt={loadedImages[currentImageIndex]?.alt}
                            className="min-w-[80vw] min-h-[80vh] object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                    <button
                        className="absolute right-6 text-white text-4xl hover:text-[#c20e35] focus:outline-none"
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateImage('next');
                        }}
                        aria-label="Next image"
                    >
                        ❯
                    </button>
                </div>
            )}
        </>
    );
};
export default Gallery;
