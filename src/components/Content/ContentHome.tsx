import{ FoundersCards }from "../Cards/FoundersCards";
import QuoteCards from "../Cards/QuoteCards";
import HomeCards from "../Cards/HomeCards";
import visionImage from '@/styles/Ilustrations/dance-16.jpg'
import classesImage from '@/styles/Ilustrations/dance-12.jpg'



const ContentHome = () => {
    const sections = [
        {
            image: classesImage,
            imageAlt: "Movement Studio vision",
            sectionTitle: "Vision",
            cardTitle: "Who we are",
            description:
                "At Movement Studio, we’re passionate about creating a supportive and inspiring environment for dancers of all levels. Whether you’re a complete beginner eager to explore the world of modern dance, a seasoned performer looking to refine your technique, or simply someone who finds joy in moving, you’ll find a home here.",
            buttonText: "About us",
        },
        {
            image: visionImage,
            imageAlt: "Movement Studio classes",
            sectionTitle: "Classes",
            cardTitle: "Our classes",
            description:
                "Get your groove on with Hip Hop, find your rhythm in Jazz, and explore connection in Contact Improvisation. Movement Studio offers a diverse range of classes for every dancer.",
            buttonText: "Reserve your spot",
        },
    ];

    return (
        <section className="bg-white text-black">
            {sections.map((section) => (
                <HomeCards
                    key={section.sectionTitle}
                    image={section.image}
                    imageAlt={section.imageAlt}
                    sectionTitle={section.sectionTitle}
                    cardTitle={section.cardTitle}
                    description={section.description}
                    buttonText={section.buttonText}
                />
            ))}
            {/* Founders */}
            <FoundersCards />
            <QuoteCards />
        </section>
    )
}

export default ContentHome
