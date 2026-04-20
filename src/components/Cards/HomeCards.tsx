import React from 'react'
import Image, { StaticImageData } from 'next/image'
import ButtonCards from '../Buttons/ButtonCards'
import styles from './HomeCards.module.css'

const HomeCards = ({ image, title, text, textDescription }: { image: StaticImageData, title: string, text: string, textDescription: string }) => {
    const sectionHeight = "min-h-[720px] md:h-[50vw] lg:h-[640px]";
    const panelHeight = "min-h-[360px] md:h-full";

    return (
        <div className={`grid grid-cols-1 border-b border-black/40 md:grid-cols-2 md:items-stretch ${sectionHeight}`}>
            <div className={`relative overflow-hidden bg-grey ${panelHeight}`}>
                <Image
                    src={image}
                    alt={"visionImage"}
                    fill
                    className="object-cover z-0"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
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
                    <ButtonCards text={"About us"} />
                </div>
            </div>
        </div>
    )
}

export default HomeCards