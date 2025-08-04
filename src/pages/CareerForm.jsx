import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AOS from 'aos';
import InnerHero from "../components/Hero/InnerHero";
const CareerForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: ''
    });
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out'
        });
        document.title = "Apply | EDIFICE";
        window.scrollTo(0, 0);
    }, []);

    // fetch the job title based on the ID
    const jobTitle = "Sr. Executive/Assistant Manager";

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create FormData object for file upload
        const applicationData = new FormData();
        applicationData.append('resume', selectedFile);
        applicationData.append('jobId', id);
        Object.entries(formData).forEach(([key, value]) => {
            applicationData.append(key, value);
        });

        //  send the data to your backend
        console.log("Submitting application:", {
            jobId: id,
            ...formData,
            resume: selectedFile?.name
        });

        // After submission,  redirect
        // navigate('/thank-you');
        alert('Application submitted successfully!');
        navigate('/career');
    };

    return (
        <>
            <InnerHero
                subtitle="Latest Releases"
                title="Career"
                backgroundImage=""
            />
            <section data-aos="fade-up" className="dark:bg-black dark:text-white bg-white text-black px-4 md:px-10 transition-colors duration-300 ease-in-out">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="w-full max-w-2xl">
                            <div className="bg-white p-8 rounded-2xl shadow-xl">
                                <h2 className="text-2xl font-bold text-center text-[#c20e35] mb-6">Apply Now</h2>
                                <form className="space-y-6" encType="multipart/form-data" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="fullName" className="block text-md text-gray-600 mb-1">Full Name *</label>
                                            <input
                                                id="fullName"
                                                name="fullName"
                                                required
                                                type="text"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#c20e35] focus:border-[#c20e35]"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-md text-gray-600 mb-1">Email Address *</label>
                                            <input
                                                id="email"
                                                name="email"
                                                required
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#c20e35] focus:border-[#c20e35]"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-md text-gray-600 mb-1">Phone Number *</label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                required
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#c20e35] focus:border-[#c20e35]"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="position" className="block text-md text-gray-600 mb-1">Position</label>
                                            <input
                                                id="position"
                                                name="position"
                                                readOnly
                                                value={jobTitle}
                                                type="text"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="resume" className="block text-md text-gray-600 mb-1">Upload Resume *</label>
                                        <div className="flex items-center gap-4">
                                            <label htmlFor="resume" className="cursor-pointer inline-block px-4 py-2 bg-[#222] text-white text-sm font-medium rounded-md hover:bg-[#a10b2b] transition-colors">
                                                Choose File
                                            </label>
                                            <span className="text-gray-600 text-sm truncate">
                                                {selectedFile ? selectedFile.name : "No file selected"}
                                            </span>
                                        </div>
                                        <input
                                            id="resume"
                                            name="resume"
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            required
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                        <p className="text-xs text-gray-500 mt-1">Accepted file types: .pdf, .doc, .docx</p>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-md text-gray-600 mb-1">Cover Letter / Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#c20e35] focus:border-[#c20e35]"
                                        ></textarea>
                                    </div>

                                    <div className="flex justify-center">
                                        <button
                                            type="submit"
                                            className="flex items-center gap-2 px-6 py-2 bg-[#c20e35] text-md text-white font-semibold rounded-full hover:bg-[#a10b2b] transition-colors"
                                        >
                                            Submit Application
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default CareerForm;