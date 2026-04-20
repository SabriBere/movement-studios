import React from "react";
import styles from "./CardsInstructors.module.css";

type AboutInstructors = {
    description?: string;
    job: string;
    name: string;
};

const CardsInstructors = () => {
    const instructors: AboutInstructors[] = [
        {
            name: "Maya Rodriguez",
            job: "Modern & Contemporary Instructor",
            description:
                "Maya's passion for modern and contemporary dance is infectious. With a background in performance and choreography, she brings a dynamic and expressive approach to her classes. She has been immersed in the culture for over a decade, mastering various styles from old-school grooves to contemporary beats.",
        },
        {
            name: "Kai Chen",
            job: "Hip Hop Foundations & Freestyle Instructor",
            description:
                "Kai's energy and love for hip hop are undeniable. He has been immersed in the culture for over a decade, mastering various styles from old-school grooves to contemporary beats. Kai's classes are a blend of technical instruction and creative freedom, encouraging students to develop their own unique style.",
        },
        {
            name: "Lena Evans",
            job: "Jazz Technique & Jazz Funk Instructor",
            description:
                "Lena brings a vibrant and dynamic energy to her jazz classes. With a strong foundation in classical jazz technique, she also loves to explore the funky, high-energy side of the style. Lena's classes focus on building strength, flexibility, and musicality, while also encouraging students to express their personality through movement.",
        },
        {
            name: "Noah Sinclair",
            job: "Improvisation for Performance Instructor",
            description:
                "Noah is a master of spontaneous movement and connection. He has a deep understanding of contact improvisation and its ability to foster trust and communication through touch and weight sharing. His classes are a journey of exploration, encouraging dancers to listen to their bodies and connect with others in a meaningful way.",
        },
        {
            name: "Jasmine Patel",
            job: "Modern & Contemporary Instructor",
            description:
                "Jasmine has a gift for making modern dance accessible and enjoyable for beginners. Her classes are a gentle introduction to the fundamental principles of modern movement, focusing on body awareness, grounding, and creative exploration.",
        },
        {
            name: "Ricky Gomez",
            job: "Hip Hop Choreography Instructor",
            description:
                "Ricky brings a contagious passion and a wealth of experience to his hip hop choreography classes. He has worked with numerous dance crews and artists, developing a sharp eye for detail and a knack for creating dynamic and engaging routines.",
        },
    ];

    return (
        <div className={styles.container}>
            {instructors.map((instructor) => (
                <article key={instructor.name} className={styles.card}>
                    <div>
                        <h3 className={styles.name}>{instructor.name}</h3>
                        <p className={styles.job}>{instructor.job}</p>
                    </div>

                    <p className={styles.description}>
                        {instructor.description}
                    </p>
                </article>
            ))}
        </div>
    );
};

export default CardsInstructors;