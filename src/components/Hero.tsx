import Image from "next/image"

interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export default function Hero({ title, subtitle, backgroundImage }: HeroProps) {
  return (
    <section className="relative h-[500px] flex items-center justify-center text-center text-white">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          className="object-cover -z-10"
        />
      )}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  )
}
