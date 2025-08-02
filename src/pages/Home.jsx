import { useEffect } from 'react';

import HeroSlider from '../components/Hero/HeroSlider';
import ProjectsGrid from '../components/Projects/ProjectsGrid';
import Testimonials from '../components/common/Testimonilas';
import AboutHome from '../components/About/AboutHome';
import AOS from 'aos';

const Home = () => {
    useEffect(() => {
        document.title = "Home | EDIFICE";
        window.scrollTo(0, 0);
    }, []);
    return (
        <main>
            <HeroSlider />
            <AboutHome />
            <ProjectsGrid
                subtitle="Latest Launches"
                title="Projects"
            />
            <Testimonials />

        </main>
    );
};

export default Home;
