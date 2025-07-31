import { useEffect, useState } from 'react';
import InnerHero from '../components/Hero/InnerHero';
import img1 from "../assets/images/news/1.jpg"
import img2 from "../assets/images/news/2.jpg"
import img3 from "../assets/images/news/3.jpg"
const Gallery = () => {
    useEffect(() => {
        document.title = "Gallery | EDIFICE";
        window.scrollTo(0, 0);
      }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: img1, alt: 'Gallery Image 1' },
    { src: img2, alt: 'Gallery Image 2' },
    { src: img3, alt: 'Gallery Image 3' },
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; 
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  };

  return (
   <main>
      <InnerHero
                subtitle="Our"
                title="GALLERY"
                backgroundImage=""
            />
     <section 
      className="bg-white text-black dark:bg-black dark:text-white py-16 px-4 md:px-10 transition-colors duration-300 ease-in-out"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-72 object-cover transform transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <div 
        id="imageModal" 
        className={`fixed inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 z-50 ${
          isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button 
          onClick={closeModal} 
          aria-label="Close modal" 
          className="absolute top-6 right-6 text-white text-3xl hover:text-[#c20e35] z-60 focus:outline-none"
        >
          ×
        </button>

        {/* Left Arrow */}
        <button 
          onClick={prevImage} 
          aria-label="Previous image" 
          className="absolute left-6 text-white text-4xl hover:text-[#c20e35] z-60 focus:outline-none"
        >
          ❮
        </button>

        {/* Right Arrow */}
        <button 
          onClick={nextImage} 
          aria-label="Next image" 
          className="absolute right-6 text-white text-4xl hover:text-[#c20e35] z-60 focus:outline-none"
        >
          ❯
        </button>

        <img 
          id="modalImage" 
          src={images[currentImageIndex].src} 
          alt={images[currentImageIndex].alt} 
          className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg transform transition-transform duration-300 scale-90"
        />
      </div>
    </section>
   </main>
  );
};

export default Gallery;