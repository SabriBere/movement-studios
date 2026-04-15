import React from 'react'
import ContendAbout from '@/components/Content/ContendAbout'
import HeroAbout from '@/components/Hero/HeroAbout'

const About = () => {
    return (
        <main className="min-h-screen bg-white">
            <HeroAbout />
            <ContendAbout />
        </main>
    )
}

export default About