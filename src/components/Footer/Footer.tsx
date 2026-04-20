type FooterProps = {
    className?: string;
};

const footerItems = [
    {
        label: "Our Socials",
        href: "#socials",
        className: "bg-blue-barry !text-white",
    },
    {
        label: "Email us",
        href: "mailto:hello@movementstudios.com",
        className: "bg-black !text-white",
    },
    {
        label: "Book with us",
        href: "/booking",
        className: "bg-fucsia text-black",
    },
];

export default function Footer({ className = "" }: FooterProps) {
    return (
        <footer
            className={`w-full overflow-hidden ${className}`.trim()}
            aria-label="Footer"
        >
            <div className="bg-cian px-7 py-9 text-black sm:px-9 sm:py-10 lg:grid lg:min-h-[460px] lg:grid-cols-[1fr_0.95fr_1.05fr] lg:px-14 lg:py-10">
                <div>
                    <h2 className="max-w-[8ch] text-[clamp(4rem,12vw,8rem)] leading-[0.86] font-semibold tracking-[-0.07em]">
                        Mov. Stu.
                    </h2>
                </div>

                <div className="mt-8 space-y-6 text-sm leading-tight sm:text-base lg:mt-0">
                    <div>
                        <p>Email:</p>
                        <a
                            href="mailto:hello@figma.com"
                            className="mt-2 inline-block hover:underline"
                        >
                            hello@figma.com
                        </a>
                    </div>

                    <div>
                        <p>Instagram:</p>
                        <a
                            href="https://instagram.com/figma"
                            className="mt-2 inline-block underline underline-offset-2"
                        >
                            @figma
                        </a>
                    </div>

                    <div>
                        <p>Facebook:</p>
                        <a
                            href="https://facebook.com/figma"
                            className="mt-2 inline-block underline underline-offset-2"
                        >
                            figma
                        </a>
                    </div>
                </div>

                <div className="mt-6 space-y-8 text-sm leading-tight sm:text-base lg:mt-0">
                    <div>
                        <p>Address:</p>
                        <p className="mt-6 max-w-[23rem]">
                            224 Candyland Lane, Brooklyn, NY
                            <br />
                            (646) 555-4567
                        </p>
                    </div>

                    <p>
                        Movement Studios ©
                        <br />
                        2025 All Rights Reserved
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3">
                {footerItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className={`flex min-h-40 items-start px-7 py-7 text-2xl font-bold tracking-tight transition hover:bg-white hover:!text-black sm:min-h-[170px] sm:px-7 sm:py-8 md:min-h-[190px] md:px-9 lg:min-h-[170px] lg:px-10 ${item.className}`}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </footer>
    );
}
