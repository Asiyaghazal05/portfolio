
import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';

const Hero = () => {
    return (
        <div 
            id="Hero" 
            className="min-h-screen bg-no-repeat bg-left lg:bg-[15%] bg-cover"
            style={{ backgroundSize: "35%", backgroundPosition: "left 100px top 100px" }}
        >
            <Navbar />
            <div className="container grid lg:grid-cols-1 h-[calc(100vh-60px)]">
                <div className="hidden lg:block">
                    {/* Optional: Image component if you want an image here */}
                    {/* <Image src="/banner.bg.jpg" alt="Banner" width={500} height={500} /> */}
                </div>
                <div className="text-[80px] sm:text-[100px] lg:text-[120px] font-bold leading-tight flex flex-col justify-center items-center">
                    <p data-aos="zoom-in-up">I'm</p>
                    <p data-aos="zoom-in-up">Asiya</p>
                    <p data-aos="zoom-in-up">Ghazal</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;

