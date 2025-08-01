import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from "../../assets/images/hero/11.jpg";
import img2 from "../../assets/images/hero/12.jpg";
import img3 from "../../assets/images/hero/13.jpg";
import img4 from "../../assets/images/hero/14.jpg";

const TeamSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      position: "Chairman",
      image: img1
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "CEO",
      image: img2
    },
    {
      id: 3,
      name: "Michael Brown",
      position: "CFO",
      image: img3
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "CTO",
      image: img4
    },
    {
      id: 5,
      name: "David Wilson",
      position: "COO",
      image: img2
    },
    {
      id: 6,
      name: "Jessica Taylor",
      position: "CMO",
      image: img1
    },
    {
      id: 7,
      name: "Robert Anderson",
      position: "CIO",
      image: img4
    },
    {
      id: 8,
      name: "Jennifer Martinez",
      position: "HR Director",
      image: img3
    }
  ];

  return (
    <section data-aos="fade-up" className="py-16 bg-sky-100 text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="text-center mb-10" data-aos="fade-up">
          <p className="text-[#c20e35] dark:text-red-600 text-sm uppercase tracking-wider relative inline-block mb-2 before:content-[''] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#c20e35] before:rounded-full">
            Team
          </p>
          <h2 className="relative text-3xl md:text-4xl font-bold text-black dark:text-white text-center mb-6 after:content-[''] after:block after:w-20 after:h-1 after:bg-[#c20e35] after:mx-auto after:mt-4">
            Management
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={(index % 4) * 100}
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform group-hover:scale-105 cursor-pointer">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[400px] md:h-[350px] object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/80 text-white dark:bg-white dark:text-black p-4 transition-all duration-300 group-hover:bg-opacity-90">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-[#c20e35]">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;