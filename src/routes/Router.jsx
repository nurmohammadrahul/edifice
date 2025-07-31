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
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;