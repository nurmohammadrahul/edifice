import { useEffect } from 'react';
import HeroSlider from '../components/Hero/HeroSlider';
import ProjectsGrid from '../components/Projects/ProjectsGrid';
import Testimonials from '../components/common/Testimonilas';
import AboutHome from '../components/About/AboutHome';
import AOS from 'aos';
import { useLocation } from 'react-router-dom'; // Add this import

const Home = () => {
    const location = useLocation(); // Get current location

    useEffect(() => {
        document.title = "Home | EDIFICE";
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
        setTimeout(() => {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out'
            });
        }, 100);
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                document.body.style.overflow = '';
            }, 500);
        }
    }, [location.key]);

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