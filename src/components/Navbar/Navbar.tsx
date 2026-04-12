"use client";
import { useState } from "react";
import Link from "next/link";

type NavbarProps = {
    className?: string;
};

const desktopNavItems = [
    { label: "Classes", href: "/classes" },
    { label: "About", href: "/about" },
    { label: "224 Nostrand Ave, Brooklyn, NY", href: "#location" },
];

const mobileNavItems = [
    { label: "Classes", href: "/classes", className: "bg-cian text-black" },
    { label: "About us", href: "/about", className: "bg-cian text-black" },
    { label: "Book with us", href: "#booking", className: "bg-fucsia text-black" },
];

export default function Navbar({ className = "" }: NavbarProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <nav
            className={`w-full text-white ${className}`.trim()}
            aria-label="Primary"
        >
            <div className="sm:hidden">
                <div className="grid h-10 grid-cols-[2.5rem_1fr] overflow-hidden bg-black">
                    <button
                        type="button"
                        className="flex items-center justify-center border-r border-white/15 text-white"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen((current) => !current)}
                    >
                        <span className="flex w-4 flex-col gap-1">
                            <span className="h-px bg-white" />
                            <span className="h-px bg-white" />
                            <span className="h-px bg-white" />
                        </span>
                    </button>
                    <Link
                        href="/"
                        className="flex items-center justify-center px-4 text-lg font-light tracking-tight"
                    >
                        Movement Studios.
                    </Link>
                </div>

                {isOpen ? (
                    <div className="border border-black/10 border-t-0">
                        {mobileNavItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={`block border-b border-black/20 px-4 py-4 text-lg font-semibold transition hover:bg-white hover:!text-black last:border-b-0 ${item.className}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                ) : null}
            </div>

            <div className="hidden h-14 w-full items-stretch overflow-hidden bg-black sm:flex lg:h-[68px]">
                <div className="flex min-w-0 flex-1 items-stretch">
                    {desktopNavItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="flex items-center border-r border-white/15 px-4 text-xs font-light tracking-tight text-white transition hover:bg-white hover:text-black md:px-6 md:text-sm lg:px-7"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <Link
                    href="/"
                    className="flex shrink-0 items-center px-5 text-2xl font-light tracking-tight text-white transition hover:bg-white hover:text-black md:px-7 md:text-3xl lg:px-8 lg:text-[2.2rem]"
                >
                    Movement Studios.
                </Link>
            </div>
        </nav>
    );
}
