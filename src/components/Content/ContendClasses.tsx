import Image from "next/image";
import ourPromise from '@/styles/Ilustrations/dance-5.jpeg'
import ClassCard from "../Cards/ClassesCards";

export default function ContentClasses() {
    return (
        <section className="bg-black text-white">
            <div className="grid lg:grid-cols-[minmax(260px,30vw)_1fr]">
                {/* Titulo */}
                <aside className="border-b border-white/20 bg-black px-4 py-6 lg:border-b-0 lg:px-4 lg:py-4">
                    <h2 className="max-w-[12rem] text-3xl leading-tight font-semibold tracking-[-0.06em] sm:text-4xl lg:sticky lg:top-24">
                        Booking Experience for Classes
                    </h2>
                </aside>

                <div className="grid grid-cols-1 bg-white text-black sm:grid-cols-2">
                    <ClassCard />
                </div>
            </div>

            {/* promises */}
            <div className="grid lg:grid-cols-[minmax(260px,30vw)_1fr]">
                <aside className="border-t border-white/15 bg-black px-4 py-5 lg:px-4 lg:py-4">
                    <h2 className="text-3xl font-semibold tracking-[-0.06em] sm:text-4xl lg:sticky lg:top-24">
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
                        <Image
                            src={ourPromise}
                            alt={"our promises"}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
