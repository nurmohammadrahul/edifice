import { useEffect } from 'react';
import InnerHero from '../components/Hero/InnerHero';
import AboutSection from '../components/About/AboutSection';
import TeamSection from '../components/About/TeamSection';
import img from '../assets/images/hero/02.jpg'
const About = () => {
  useEffect(() => {
    document.title = "About Us | EDIFICE";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <InnerHero 
        title="Our Story" 
        subtitle="About Us" 
        backgroundImage={img}
      />
      <AboutSection />
      <TeamSection />
    </main>
  );
};

export default About;