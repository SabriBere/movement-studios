import { colorGroups } from "@/styles/theme";
import Hamburguer from "@/components/Navbar/Hamburguer";

export default function Home() {
    return (
        <main className="min-h-screen bg-white px-4 py-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl bg-white px-6 py-10 sm:px-12 sm:py-14">
                <section className="border-b border-black/10 pb-14">
                    <p className="text-[11px] tracking-[0.18em] text-grey">
                        Text Styles
                    </p>
                    <div className="mt-12 space-y-8">
                        <h1 className="text-6xl font-black tracking-tight text-black sm:text-7xl">
                            Header 1
                        </h1>
                        <h1 className="font-mono text-5xl font-light tracking-tight text-black sm:text-7xl">
                            Header 1 Mono
                        </h1>
                        <h2 className="text-3xl font-normal tracking-tight text-black sm:text-4xl">
                            Header 2
                        </h2>
                        <h3 className="text-2xl font-bold tracking-tight text-black">
                            Header 3
                        </h3>
                        <h4 className="text-lg font-semibold tracking-tight text-black">
                            Header 4
                        </h4>
                        <h5 className="text-sm font-semibold uppercase tracking-[0.16em] text-black">
                            Header 5
                        </h5>
                        <p className="max-w-xl text-3xl leading-tight font-bold text-black">
                            Paragraph 1 Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <p className="max-w-xl text-xl leading-snug text-black/85">
                            Paragraph 2 Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <p className="max-w-lg text-sm leading-snug text-black/80">
                            Paragraph 3 Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <p className="max-w-lg text-xs leading-snug text-black/75">
                            Paragraph 4 Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <p className="max-w-md text-[10px] leading-snug text-black/70">
                            Paragraph 5 Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <a
                            href="#colors"
                            className="inline-block text-sm underline decoration-black/30 underline-offset-4"
                        >
                            Link
                        </a>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black">
                            Promotion
                        </p>
                        <button className="inline-flex items-center justify-center bg-blue-barry px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue">
                            Button
                        </button>
                    </div>
                </section>

                <section id="colors" className="pt-14">
                    <p className="text-[11px] tracking-[0.18em] text-grey">
                        Color
                    </p>
                    <div className="mt-12 space-y-10">
                        {colorGroups.map((group, index) => (
                            <div key={index} className="flex flex-wrap gap-6">
                                {group.map((color) => (
                                    <Hamburguer
                                        key={`${index}-${color.name}`}
                                        name={color.name}
                                        className={color.className}
                                        border={color.border}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
