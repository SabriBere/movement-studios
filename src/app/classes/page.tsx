import React from 'react'
import Hero from '@/components/Hero/Hero'
import ContentClasses from '@/components/Content/ContendClasses'
import classesHeroImage from "@/styles/Ilustrations/dance-19.jpg";


const Classes = () => {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero classes */}
            <Hero image={classesHeroImage} title="Classes" />
            {/* Content classes */}
            <ContentClasses />
        </main>
    )
}

export default Classes