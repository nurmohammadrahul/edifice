import { useEffect, useState } from 'react';
import InnerHero from '../components/Hero/InnerHero';
import ProjectsGrid from '../components/Projects/ProjectsGrid';
import img from "../assets/images/hero/03.jpg"
const Projects = () => {
    useEffect(() => {
        document.title = "Our Projects | EDIFICE";
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <InnerHero
                title="Our Projects"
                subtitle="Explore"
                backgroundImage={img}
            />
            <ProjectsGrid
                subtitle=""
                title=""
            />
        </main>
    );
};

export default Projects;