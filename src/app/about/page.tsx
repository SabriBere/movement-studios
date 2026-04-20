import React from 'react'
import Hero from '@/components/Hero/Hero'
import ContendAbout from '@/components/Content/ContendAbout'
import aboutHeroImage from "@/styles/Ilustrations/dance-18.jpg";

const About = () => {
    return (
        <main className="min-h-screen bg-white">
            <Hero image={aboutHeroImage} title="About" />
            <ContendAbout />
        </main>
    )
}

export default About