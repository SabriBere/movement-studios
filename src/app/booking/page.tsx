import React from "react";

const bookingOptions = [
    {
        title: "Email",
        value: "hello@movementstudiosbk.com",
        href: "mailto:hello@movementstudiosbk.com",
    },
    {
        title: "Phone",
        value: "(646) 555-4821",
        href: "tel:+16465554821",
    },
    {
        title: "Instagram",
        value: "@movementstudiosbk",
        href: "https://www.instagram.com/movementstudiosbk",
    },
];

const Booking = () => {
    return (
        <main className="min-h-screen bg-white px-4 py-24 text-white sm:px-6 lg:px-10">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                <section className="space-y-6">
                    <p className="text-sm uppercase tracking-[0.25em] text-black/60">
                        Booking
                    </p>
                    <h1 className="text-5xl text-black font-semibold tracking-[-0.05em] sm:text-6xl">
                        Reserve your next class.
                    </h1>
                    <p className="max-w-2xl text-black text-lg leading-8 text-black/75">
                        Tell us which style you want to try, your preferred day, and
                        whether it&apos;s your first time with us. We&apos;ll get back to
                        you with availability and next steps within one business day.
                    </p>
                </section>

                <section className="border border-black bg-black p-6 backdrop-blur-sm sm:p-8">
                    <div className="space-y-5">
                        {bookingOptions.map((option) => (
                            <div
                                key={option.title}
                                className="border-b border-black pb-5 last:border-b-0 last:pb-0"
                            >
                                <p className="text-sm uppercase tracking-[0.22em] text-white">
                                    {option.title}
                                </p>
                                <a
                                    href={option.href}
                                    className="mt-2 inline-block text-white text-xl font-medium transition"
                                    target={
                                        option.href.startsWith("http") ? "_blank" : undefined
                                    }
                                    rel={
                                        option.href.startsWith("http")
                                            ? "noreferrer"
                                            : undefined
                                    }
                                >
                                    {option.value}
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Booking;
