import React from 'react'
import HeroClasses from '@/components/Hero/HeroClasses'
import ContentClasses from '@/components/Content/ContendClasses'


const Classes = () => {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero classes */}
            <HeroClasses />
            {/* Content classes */}
            <ContentClasses />
        </main>
    )
}

export default Classes