import Image, { type StaticImageData } from "next/image";
import sophiaImage from "@/styles/Ilustrations/dance-8.jpg";
import alisaImage from "@/styles/Ilustrations/dance-9.jpg";
import spaceImage from "@/styles/Ilustrations/dance-20.jpg";
import ButtonsBooking from "../Buttons/ButtonsBooking";

type AboutPerson = {
    description?: string;
    image?: StaticImageData;
    job: string;
    name: string;
};

const founders: AboutPerson[] = [
    {
        name: "Sophia Bennett",
        job: "Founder & Instructor",
        image: sophiaImage,
    },
    {
        name: "Alisa Morris",
        job: "Founder & Program Manager",
        image: alisaImage,
    },
];

const instructors: AboutPerson[] = [
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

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <aside className="bg-black px-4 py-4 text-white sm:px-5 lg:border-r lg:border-white/15">
            <h2 className="text-3xl font-semibold tracking-[-0.06em] sm:text-4xl lg:sticky lg:top-24">
                {children}
            </h2>
        </aside>
    );
}

function FounderTile({ founder, index }: { founder: AboutPerson; index: number }) {
    const isSecond = index === 1;

    return (
        <article className="grid overflow-hidden border-b border-white/15 bg-black">
            <div className="relative aspect-[1.08] min-h-[235px] overflow-hidden bg-grey sm:aspect-[1.14] lg:min-h-[330px]">
                {founder.image && (
                    <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="object-cover grayscale"
                        sizes="(min-width: 1024px) 35vw, (min-width: 640px) 50vw, 100vw"
                        priority={index === 0}
                    />
                )}
            </div>

            <div
                className={`px-5 py-5 text-black ${isSecond ? "bg-cian" : "bg-fucsia"
                    }`}
            >
                <h3 className="text-xl leading-none font-bold tracking-[-0.05em]">
                    {founder.name}
                </h3>
                <p className="mt-2 text-xs leading-none">{founder.job}</p>
            </div>
        </article>
    );
}

function InstructorTile({ instructor }: { instructor: AboutPerson }) {
    return (
        <article className="grid min-h-[245px] grid-rows-[auto_1fr] border-b border-r border-white/15 bg-black px-5 py-4 text-white sm:min-h-[265px] lg:min-h-[250px]">
            <div>
                <h3 className="text-sm leading-none text-white/70">
                    {instructor.name}
                </h3>
                <p className="mt-1 text-sm leading-tight font-semibold text-fucsia">
                    {instructor.job}
                </p>
            </div>

            <p className="self-end text-sm leading-tight text-white/70">
                {instructor.description}
            </p>
        </article>
    );
}

function SpaceSection() {
    return (
        <div className="bg-black">
            <div className="grid border-b border-white/15 lg:grid-cols-[2fr_1fr]">
                <div className="relative min-h-[280px] overflow-hidden bg-grey sm:min-h-[380px] lg:min-h-[500px]">
                    <Image
                        src={spaceImage}
                        alt="Dance studio space"
                        fill
                        className="object-cover object-[center_18%] grayscale"
                        sizes="(min-width: 1024px) 67vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                </div>

                <div className="flex min-h-[250px] items-center border-t border-white/15 bg-black px-5 py-8 text-white sm:px-8 lg:border-l lg:border-t-0 lg:px-14">
                    <div className="max-w-[22rem]">
                        <h2 className="text-xl leading-none font-semibold tracking-[-0.04em]">
                            Our Space
                        </h2>
                        <p className="mt-6 text-sm leading-tight text-white/75">
                            Whether you&apos;re a beginner looking to explore
                            expressive movement or an advanced dancer ready to
                            refine your technique, we have classes for{" "}
                            <span className="font-semibold text-fucsia">
                                you! Join our weekly sessions, drop in for open
                                choreography,
                            </span>{" "}
                            or take part in our special upcoming choreography
                            series. Don&apos;t miss our special Masterclass with
                            Maxime Longue this Saturday! Limited spots available
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-blue-barry px-5 py-16 text-white sm:px-12 sm:py-20 lg:px-[12vw] lg:py-28">
                <div className="max-w-4xl">
                    <p className="max-w-3xl text-3xl leading-[0.96] font-semibold tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                        Whether you&apos;re a beginner looking to explore
                        expressive movement or an advanced dancer ready to
                        refine your technique, we have classes for you!
                    </p>

                    <ButtonsBooking title={"Reserve your spot"} />
                </div>
            </div>
        </div>
    );
}

export default function ContendAbout() {
    return (
        <section className="bg-black text-white">
            <div className="grid lg:grid-cols-[minmax(200px,34vw)_1fr]">
                <SectionLabel>Founders</SectionLabel>

                <div className="grid border-t border-white/15 sm:grid-cols-2 lg:border-t-0">
                    {founders.map((founder, index) => (
                        <FounderTile
                            key={founder.name}
                            founder={founder}
                            index={index}
                        />
                    ))}
                </div>
            </div>

            <div className="grid lg:grid-cols-[minmax(200px,34vw)_1fr]">
                <SectionLabel>Instructors</SectionLabel>

                <div className="grid border-t border-white/15 sm:grid-cols-2 lg:border-t-0">
                    {instructors.map((instructor) => (
                        <InstructorTile
                            key={instructor.name}
                            instructor={instructor}
                        />
                    ))}
                </div>
            </div>

            <SpaceSection />
        </section>
    );
}
