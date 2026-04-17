import Image from "next/image";
import aboutHeroImage from "@/styles/Ilustrations/dance-17.jpg";

const HeroAbout = () => {
  return (
    <section className='w-full overflow-hidden bg-black text-white' aria-label='Hero'>
      <div className='relative min-h-[430px] overflow-hidden bg-[#171717] sm:min-h-[520px] lg:min-h-[565px]'>
        <Image
          src={aboutHeroImage}
          alt="Dance class in motion"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className='relative z-10 flex min-h-[380px] flex-col justify-between px-6 pt-10 pb-24 sm:min-h-[470px] sm:px-8 sm:pt-12 lg:px-8 lg:pt-12'>
          <h1 className="whitespace-pre-line text-[clamp(4.5rem,16vw,10rem)] leading-[0.86] font-light tracking-[-0.04em] text-white">
            About Us
          </h1>
        </div>
      </div>
    </section>
  )
}

export default HeroAbout
