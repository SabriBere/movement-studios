import Image, { type StaticImageData } from "next/image";
import contactImprovisationImage from "@/styles/Ilustrations/Frame 2147236292 (1).jpg";
import jazzTechniqueImage from "@/styles/Ilustrations/Frame 2147236292.jpg";
import hipHopFreestyleImage from "@/styles/Ilustrations/Frame 2147236293.jpg";
import hipHopFoundationsImage from "@/styles/Ilustrations/Frame 2147236306 (1).jpg";
import jazzFunkImage from "@/styles/Ilustrations/Frame 2147236306.jpg";

type ClassCard = {
    code: string;
    description: string;
    image: StaticImageData;
    schedule: string;
    title: string;
    wide?: boolean;
};

const classes: ClassCard[] = [
    {
        code: "C1",
        description:
            "This class introduces hip hop dance, including isolations, popping, locking, and basic footwork.",
        image: hipHopFoundationsImage,
        schedule: "Tuesdays 7:00 PM - 9:00PM",
        title: "Hip Hop Foundations",
    },
    {
        code: "C2",
        description:
            "This class helps you develop your own unique movement vocabulary and respond to music in the moment.",
        image: hipHopFreestyleImage,
        schedule: "Tuesdays 7:00 PM - 9:00PM",
        title: "Hip Hop Freestyle",
    },
    {
        code: "C4",
        description:
            "This class focuses on classic jazz styles while building strength, flexibility, and musicality.",
        image: jazzTechniqueImage,
        schedule: "Wednesdays 7:00 PM - 9:00PM",
        title: "Jazz Technique",
    },
    {
        code: "D5",
        description:
            "The class is perfect for those who love to dance with power and attitude.",
        image: jazzFunkImage,
        schedule: "Thursdays 7:00 PM - 9:00PM",
        title: "Jazz Funk",
    },
    {
        code: "B2",
        description:
            "This class focuses on movement through touch and weight sharing.",
        image: contactImprovisationImage,
        schedule: "Fridays 7:00 PM - 9:00PM",
        title: "Contact Improvisation",
        wide: true,
    },
];

function ClassCard({ item }: { item: ClassCard }) {
    return (
        <article
            className={`grid overflow-hidden border-b border-r border-black/40 bg-white ${
                item.wide ? "md:col-span-2" : ""
            }`}
        >
            <div className="relative min-h-[260px] overflow-hidden bg-grey sm:min-h-[300px] lg:min-h-[280px]">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover grayscale"
                    sizes={
                        item.wide
                            ? "(min-width: 1024px) 66vw, 100vw"
                            : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    }
                />
                <div className="absolute inset-0 bg-black/10" />
                <span className="absolute left-5 top-3 text-[clamp(4rem,12vw,7rem)] leading-none font-light tracking-[-0.08em] text-white">
                    {item.code}
                </span>
            </div>

            <div className="grid min-h-[150px] grid-rows-[1fr_auto]">
                <div className="p-4 sm:p-5">
                    <h3 className="text-2xl font-bold tracking-[-0.05em]">
                        {item.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-tight text-black/80">
                        {item.description}
                    </p>
                </div>

                <div className="grid grid-cols-[1fr_86px] border-t border-black/40 text-xs">
                    <p className="px-4 py-3 text-blue-barry">{item.schedule}</p>
                    <a
                        href="/booking"
                        className="flex items-center justify-center border-l border-black/40 text-black transition hover:bg-blue-barry hover:text-white"
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </article>
    );
}

export default function ContentClasses() {
    return (
        <section className="bg-black text-white">
            <div className="grid lg:grid-cols-[minmax(260px,30vw)_1fr]">
                <aside className="border-b border-white/20 bg-black px-4 py-6 lg:border-b-0 lg:px-4 lg:py-4">
                    <h2 className="max-w-[12rem] text-3xl leading-tight font-semibold tracking-[-0.06em] sm:text-4xl lg:sticky lg:top-24">
                        Booking Experience for Classes
                    </h2>
                </aside>

                <div className="grid grid-cols-1 bg-white text-black sm:grid-cols-2">
                    {classes.map((item) => (
                        <ClassCard key={item.code} item={item} />
                    ))}
                </div>
            </div>

            <div className="grid lg:grid-cols-[minmax(260px,30vw)_1fr]">
                <aside className="border-t border-white/15 bg-black px-4 py-5 lg:px-4 lg:py-4">
                    <h2 className="text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
                        Our Promise
                    </h2>
                </aside>

                <div className="bg-black">
                    <div className="bg-blue-barry px-6 py-6 text-white sm:px-8">
                        <p className="max-w-3xl text-2xl leading-tight font-semibold tracking-[-0.04em] sm:text-3xl">
                            Whether you&apos;re a beginner looking to explore
                            expressive movement or an advanced dancer ready to
                            refine your technique, we have classes for you!
                        </p>
                    </div>

                    <div className="relative min-h-[320px] overflow-hidden bg-grey sm:min-h-[420px] lg:min-h-[520px]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_36%,rgba(255,255,255,0.3),transparent_20%),linear-gradient(145deg,#171717_0%,#4f4f4f_50%,#171717_100%)]" />
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
}
