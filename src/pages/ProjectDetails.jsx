import InnerHero from '../components/Hero/InnerHero';
import ProjectDetailsGallery from '../components/ProjectDetails/ProjectDetailsGallery';
import SingleProjectDetails from '../components/ProjectDetails/SingleProjectDetails';
import img from "../assets/images/hero/01.jpg"
import ProjectVideo from '../components/ProjectDetails/ProjectVideo';
import ProjectLocation from '../components/ProjectDetails/ProjectLocation';
import ProjectsGrid from '../components/Projects/ProjectsGrid';
import { useEffect } from 'react';
const ProjectDetails = () => {
  useEffect(() => {
    document.title = "Project Details | EDIFICE";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <InnerHero
        subtitle="Our Projects"
        title="Completed"
        backgroundImage={img}
      />
      <SingleProjectDetails />
      <ProjectDetailsGallery />
      <ProjectVideo />
      <ProjectLocation />
      <ProjectsGrid 
            subtitle="Related Projects"
            title="Projects"
            />
    </>

  );
};

export default ProjectDetails;