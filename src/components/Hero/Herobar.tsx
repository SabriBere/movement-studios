import Image from "next/image";
import heroImage from '@/styles/Ilustrations/dance-15.jpg'
import ButtonsCards from "../Buttons/ButtonsCards";

type HerobarProps = {
    heading?: string;
    title?: string;
    tickerItems?: string[];
};

const defaultTickerItems = [
    "Fluid. Expressive. Powerful. Move with us!",
    "Masterclass Alert: Guest Choreographer Workshop Every Saturday",
    "New Contemporary Dance Classes Now Enrolling – Secure Your Spot!",
];

export default function Herobar({
    heading = "Find your\nflow.",
    title = "Reserve your spot",
    tickerItems = defaultTickerItems,
}: HerobarProps) {
    return (
        <section className="w-full overflow-hidden bg-black text-white" aria-label="Hero">
            <div className="relative min-h-[430px] overflow-hidden bg-[#171717] sm:min-h-[520px] lg:min-h-[565px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_78%,rgba(255,255,255,0.28),transparent_18%),radial-gradient(circle_at_68%_28%,rgba(255,255,255,0.22),transparent_15%),linear-gradient(105deg,#0a0a0a_0%,#404040_38%,#1c1c1c_64%,#565656_100%)]" />
                <div className="absolute inset-0 bg-black/45" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:128px_128px] opacity-45" />

                <div className="relative z-10 flex min-h-[380px] flex-col justify-between px-6 pt-10 pb-24 sm:min-h-[470px] sm:px-8 sm:pt-12 lg:min-h-[510px] lg:px-8 lg:pt-12">

                    <h1 className="whitespace-pre-line text-[clamp(4.5rem,16vw,10rem)] leading-[0.86] font-semibold tracking-[-0.04em] text-white z-20">
                        {heading}
                    </h1>

                    <Image
                        src={heroImage}
                        alt={"findFlow"}
                        fill
                        className="object-cover z-0"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />


                    {/* <a
                        href="/booking"
                        className="inline-flex w-fit bg-cian px-6 py-4 text-sm font-normal !text-black transition hover:bg-white sm:px-7 z-20"
                    >
                        {title}
                    </a> */}
                    <ButtonsCards title={"Reserve your spot"}/>
                </div>

                <div className="absolute inset-x-0 bottom-0 z-20 flex h-12 items-center overflow-hidden bg-blue-barry text-xs font-semibold text-white sm:h-[54px] sm:text-sm">
                    <div className="flex min-w-max animate-[heroTicker_28s_linear_infinite] gap-10 px-8">
                        {[...tickerItems, ...tickerItems].map((item, index) => (
                            <span key={`${item}-${index}`}>{item}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
