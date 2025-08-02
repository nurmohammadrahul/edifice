import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import ProjectDetails from '../pages/ProjectDetails';
import Contact from '../pages/Contact';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Gallery from '../pages/Gallery';
import News from '../pages/News';
import NewsDetails from '../pages/NewsDetails';
import Career from '../pages/Career';
import JobDetails from '../pages/JobDetails';
import CareerForm from '../pages/CareerForm';
import GalleryAlbum from '../pages/GalleryAlbum';

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/galleryalbum" element={<GalleryAlbum />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career/:id" element={<JobDetails />} />
        <Route path="/career/:id/apply" element={<CareerForm />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;