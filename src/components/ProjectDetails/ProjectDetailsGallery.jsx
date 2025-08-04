import React, { useState, useEffect } from 'react';
import AOS from "aos"
import img1 from "../../assets/images/hero/1.jpg";
import img2 from "../../assets/images/hero/2.jpg";
import img3 from "../../assets/images/hero/3.jpg";
import { motion } from 'framer-motion'
const ProjectDetailsGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  const galleryImages = [
    { src: img1, alt: "Gallery Image 1" },
    { src: img2, alt: "Gallery Image 2" },
    { src: img3, alt: "Gallery Image 3" }
  ];

  // Preload images
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = () => reject(src);
      });
    };

    Promise.all(galleryImages.map(image => loadImage(image.src)))
      .then(() => setLoadedImages(galleryImages))
      .catch(console.error);
  }, []);

  const openModal = (index) => {
    AOS.refreshHard();
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => AOS.refresh(), 300);
  };

  const navigateImage = (direction) => {
    setCurrentImageIndex(prevIndex => {
      if (direction === 'prev') {
        return (prevIndex - 1 + galleryImages.length) % galleryImages.length;
      } else {
        return (prevIndex + 1) % galleryImages.length;
      }
    });
  };
  return (

    <section className="bg-white text-black dark:bg-black dark:text-white py-16 px-4 md:px-10">
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

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-[#c20e35] z-50 focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            aria-label="Close modal"
          >
            &times;
          </button>

          <button
            className="absolute left-6 text-white text-4xl hover:text-[#c20e35] z-50 focus:outline-none"
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
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <button
            className="absolute right-6 text-white text-4xl hover:text-[#c20e35] z-50 focus:outline-none"
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
    </section>
  );
};

export default ProjectDetailsGallery;