import { useEffect } from 'react';

import HeroSlider from '../components/Hero/HeroSlider';
import ProjectsGrid from '../components/Projects/ProjectsGrid';
import Testimonials from '../components/common/Testimonilas';
import AboutHome from '../components/About/AboutHome';
import AOS from 'aos';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
        });
        document.title = "Home | EDIFICE";
        window.scrollTo(0, 0);
    }, []);
    return (
        <main>
            <HeroSlider />
            <div data-aos="fade-up">
                <AboutHome />
            </div>
            <div data-aos="fade-up">
                <ProjectsGrid
                    subtitle="Latest Launches"
                    title="Projects"
                />
            </div>
            <div data-aos="fade-up">
                <Testimonials />
            </div>

        </main>
    );
};

export default Home;
