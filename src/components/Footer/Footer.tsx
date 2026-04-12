"use client"

type FooterProps = {
    className?: string;
};

const footerItems = [
    {
        label: "Our Socials",
        href: "#socials",
        className: "bg-blue-barry text-white",
    },
    {
        label: "Email us",
        href: "mailto:hello@movementstudios.com",
        className: "bg-black text-white",
    },
    {
        label: "Book with us",
        href: "#booking",
        className: "bg-fucsia text-black",
    },
];

export default function Footer({ className = "" }: FooterProps) {
    return (
        <footer
            className={`w-full overflow-hidden ${className}`.trim()}
            aria-label="Footer"
        >
            <div className="grid grid-cols-1 sm:grid-cols-3">
                {footerItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className={`flex min-h-40 items-start px-7 py-7 text-2xl font-bold tracking-tight transition hover:brightness-95 sm:min-h-[170px] sm:px-7 sm:py-8 md:min-h-[190px] md:px-9 lg:min-h-[170px] lg:px-10 ${item.className}`}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </footer>
    );
}
