import Hero from "@/components/Hero"
import SideBySide from "@/components/SideBySide"
import { urlFor } from "@/app/lib/sanity"

// ---------- TYPES ----------
type ImageAssetRef = { _ref: string; _type: string }

export type HeroBlock = {
  _type: "hero"
  title: string
  subtitle?: string
  backgroundImage?: { asset: ImageAssetRef }
}

export type SideBySideBlock = {
  _type: "sideBySide"
  title: string
  text: string
  intro?: string
  img?: { asset: ImageAssetRef }
  bgColor?: string
  textColor?: string
  reverse?: boolean
}

export type Block = HeroBlock | SideBySideBlock

interface BlockRendererProps {
  blocks: Block[]
}

export default function BlockRenderer({ blocks }: BlockRendererProps) {
  return (
    <>
      {blocks?.map((block, i) => {
        switch (block._type) {
          case "hero": {
            const b = block as HeroBlock
            return (
              <Hero
                key={i}
                title={b.title}
                subtitle={b.subtitle}
                backgroundImage={
                  b.backgroundImage ? urlFor(b.backgroundImage).url() : undefined
                }
              />
            )
          }
          case "sideBySide": {
            const b = block as SideBySideBlock
            return (
              <SideBySide
                key={i}
                title={b.title}
                text={b.text}
                intro={b.intro}
                bgColor={b.bgColor}
                textColor={b.textColor}
                reverse={b.reverse}
                imgSrc={b.img ? urlFor(b.img).width(1200).url() : undefined}
              />
            )
          }
          default:
            return null
        }
      })}
    </>
  )
}
