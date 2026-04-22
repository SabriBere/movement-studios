import Image from "next/image";
import CardBooking from "@/components/Cards/CardBooking";
import HeroBooking from "@/components/Hero/HeroBooking";
import bookingBackground from "@/styles/Ilustrations/dance-5.jpeg";


const Booking = () => {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-24">
            <Image
                src={bookingBackground}
                alt="Movement Studios booking background"
                fill
                className="object-cover"
                sizes="100vw"
                priority
            />
            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                <HeroBooking />
                <CardBooking />
            </div>

            <p className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center text-sm tracking-[0.2em] text-white/80 uppercase">
                © Sabri Bere - 2026
            </p>
        </main>
    );
};

export default Booking;
