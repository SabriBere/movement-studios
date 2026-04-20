import { FoundersCardSecondary } from "../Cards/FoundersCards";
import QuoteCards from "../Cards/QuoteCards";
import CardsInstructors from "../Cards/CardsInstructors";
import OurSpaceCard from "../Cards/OurSpaceCard";

export default function ContendAbout() {
    return (
        <section className="bg-black text-white">
            <div className="grid lg:grid-cols-[minmax(200px,34vw)_1fr]">
                <aside className="bg-black px-4 py-4 text-white sm:px-5 lg:border-r lg:border-white/15">
                    <h2 className="text-3xl font-semibold tracking-[-0.06em] sm:text-4xl lg:sticky lg:top-24">
                        Founders
                    </h2>
                </aside>
                <FoundersCardSecondary />
            </div>

            <div className="grid lg:grid-cols-[minmax(200px,34vw)_1fr]">
                <aside className="bg-black px-4 py-4 text-white sm:px-5 lg:border-r lg:border-white/15">
                    <h2 className="text-3xl font-semibold tracking-[-0.06em] sm:text-4xl lg:sticky lg:top-24">
                        Instructors
                    </h2>
                </aside>
                <CardsInstructors />
            </div>

            <OurSpaceCard />
            <QuoteCards />
        </section>
    );
}