import CardBooking from "@/components/Cards/CardBooking";
import HeroBooking from "@/components/Hero/HeroBooking";


const Booking = () => {
    return (
        //Agregar imagen de fondo como en heroes anteriores
        <main className="min-h-screen bg-white px-4 py-24 flex items-center justify-center">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                <HeroBooking />
                <CardBooking />
            </div>
        </main>
    );
};

export default Booking;
