import InnerHero from '../components/Hero/InnerHero';
import ProjectDetailsGallery from '../components/ProjectDetails/ProjectDetailsGallery';
import SingleProjectDetails from '../components/ProjectDetails/SingleProjectDetails';
import img from "../assets/images/hero/01.jpg"
import ProjectVideo from '../components/ProjectDetails/ProjectVideo';
import ProjectLocation from '../components/ProjectDetails/ProjectLocation';
import ProjectsGrid from '../components/Projects/ProjectsGrid';
import { useEffect } from 'react';
import AOS from 'aos'
const ProjectDetails = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
    document.title = "Project Details | EDIFICE";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <InnerHero
        subtitle="Our Projects"
        title="Completed"
        backgroundImage={img}
      />
      <div data-aos="fade-up">
        <SingleProjectDetails />
      </div>
      <div data-aos="fade-up">
        <ProjectDetailsGallery />
      </div>
      <div data-aos="fade-up">
        <ProjectVideo />
      </div>
      <div data-aos="fade-up">
        <ProjectLocation />
      </div>
      <div data-aos="fade-up">
        <ProjectsGrid
          subtitle="Related Projects"
          title="Projects"
        />
      </div>




    </div>

  );
};

export default ProjectDetails;