const sectionHeight = "min-h-[720px] md:h-[50vw] lg:h-[640px]";
const panelHeight = "min-h-[360px] md:h-full";

const ContentHome = () => {
    return (
        <section className="bg-white text-black">
            {/* Vision */}
            <div className={`grid grid-cols-1 border-b border-black/40 md:grid-cols-2 md:items-stretch ${sectionHeight}`}>
                <div className={`relative overflow-hidden bg-grey ${panelHeight}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_48%,rgba(255,255,255,0.3),transparent_28%),linear-gradient(135deg,#111111_0%,#575757_55%,#222222_100%)]" />
                    <div className="absolute inset-0 bg-black/10" />
                    <h2 className=" whitespace-pre-line absolute left-8 top-8 text-[clamp(4rem,10vw,8rem)] leading-none font-semibold tracking-[-0.08em] text-white md:left-10 md:top-10">
                        Vision
                    </h2>
                </div>

                <div className={`flex items-center justify-center bg-white p-8 md:p-12 lg:p-16 ${panelHeight}`}>
                    <div className="max-w-xl md:max-w-sm lg:max-w-xl">
                        <h3 className="text-2xl font-bold tracking-[-0.04em]">
                            Who we are
                        </h3>
                        <p className="mt-8 text-lg leading-tight tracking-[-0.03em] text-black/85 md:text-xl">
                            {"At Movement Studio, we’re passionate about creating a supportive and inspiring environment for dancers of all levels. Whether you’re a complete beginner eager to explore the world of modern dance, a seasoned performer looking to refine your technique, or simply someone who finds joy in moving, you’ll find a home here."}
                        </p>
                        <a
                            href="/about"
                            className="mt-10 inline-flex bg-blue-barry !text-white px-8 py-4 text-base font-normal transition hover:bg-cian hover:!text-black"
                        >
                            About us
                        </a>
                    </div>
                </div>
            </div>
            {/* Classes */}
            <div className={`grid grid-cols-1 border-b border-black/40 md:grid-cols-2 md:items-stretch ${sectionHeight}`}>
                <div className={`relative overflow-hidden bg-grey ${panelHeight}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_48%,rgba(255,255,255,0.3),transparent_28%),linear-gradient(135deg,#111111_0%,#575757_55%,#222222_100%)]" />
                    <div className="absolute inset-0 bg-black/10" />
                    <h2 className=" whitespace-pre-line absolute left-8 top-8 text-[clamp(4rem,10vw,8rem)] leading-none font-semibold tracking-[-0.08em] text-white md:left-10 md:top-10">
                        Classes
                    </h2>
                </div>

                <div className={`flex items-center justify-center bg-white p-8 md:p-12 lg:p-16 ${panelHeight}`}>
                    <div className="max-w-xl md:max-w-sm lg:max-w-xl">
                        <h3 className="text-2xl font-bold tracking-[-0.04em]">
                            Out classes
                        </h3>
                        <p className="mt-8 text-lg leading-tight tracking-[-0.03em] text-black/85 md:text-xl">
                            {"Get your groove on with Hip Hop, find your rhythm in Jazz, and explore connection in Contact Improvisation. Movement Studio offers a diverse range of classes for every dancer."}
                        </p>
                        <a
                            href="/about"
                            className="mt-10 inline-flex bg-blue-barry !text-white px-8 py-4 text-base font-normal transition hover:bg-cian hover:!text-black"
                        >
                            Reserve your spot
                        </a>
                    </div>
                </div>
            </div>
            {/* Founders */}
            <div className={`grid grid-cols-1 md:grid-cols-2 ${sectionHeight}`}>
                <div className={`flex flex-col justify-between bg-white p-8 md:p-12 lg:p-16 ${panelHeight}`}>
                    <h2 className="text-3xl font-bold tracking-[-0.04em]">
                        Our Founders
                    </h2>

                    <blockquote>
                        <p className="max-w-sm text-3xl leading-tight tracking-[-0.05em]">
                            &quot;Find your flow, and dance your truth.&quot;
                        </p>
                        <cite className="mt-10 block text-base not-italic">
                            — Sophia Bennett
                        </cite>
                    </blockquote>
                </div>

                <div className={`grid bg-grey ${panelHeight}`}>
                    <article className="grid grid-rows-[1fr_auto]">
                        <div className="relative min-h-[240px] overflow-hidden bg-grey md:min-h-0">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_34%,rgba(255,255,255,0.38),transparent_24%),linear-gradient(135deg,#171717_0%,#575757_50%,#2b2b2b_100%)]" />
                            <div className="absolute inset-0 bg-black/10" />
                        </div>
                        <div className="bg-fucsia px-6 py-4 text-black">
                            <h3 className="text-xl font-bold tracking-[-0.04em]">
                                Sophia Bennett
                            </h3>
                            <p className="mt-1 text-base">
                                Founder &amp; Instructor
                            </p>
                        </div>
                    </article>

                    <article className="grid grid-rows-[1fr_auto]">
                        <div className="relative min-h-[240px] overflow-hidden bg-grey md:min-h-0">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_34%,rgba(255,255,255,0.36),transparent_26%),linear-gradient(155deg,#202020_0%,#777777_48%,#222222_100%)]" />
                            <div className="absolute inset-0 bg-black/10" />
                        </div>
                        <div className="bg-cian px-6 py-4 text-black">
                            <h3 className="text-xl font-bold tracking-[-0.04em]">
                                Alisa Morris
                            </h3>
                            <p className="mt-1 text-base">
                                Founder &amp; Program Manager
                            </p>
                        </div>
                    </article>
                </div>
            </div>

            <div className="bg-blue-barry px-8 py-16 text-white sm:px-16 md:px-28 lg:px-36 lg:py-28">
                <div className="max-w-5xl">
                    <p className="text-3xl leading-tight font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                        Whether you&apos;re a beginner looking to explore
                        expressive movement or an advanced dancer ready to
                        refine your technique, we have classes for you!
                    </p>
                    <a
                        href="/booking"
                        className="mt-8 inline-flex bg-cian px-7 py-4 text-sm font-normal !text-black transition hover:bg-white"
                    >
                        Reserve your spot
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ContentHome
