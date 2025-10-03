import Hero from "@/components/Hero"
import SideBySide from "@/components/SideBySide"
import { client, urlFor } from "@/app/lib/sanity"

export const revalidate = 0


// ---------- TYPES ----------
type ImageAssetRef = { _ref: string; _type: string }

type HeroBlock = {
  _type: "hero"
  title: string
  subtitle?: string
  backgroundImage?: { asset: ImageAssetRef }
}

type SideBySideBlock = {
  _type: "sideBySide"
  title: string
  text: string
  intro?: string
  img?: { asset: ImageAssetRef }
  bgColor?: string
  textColor?: string
  reverse?: boolean
}

type Block = HeroBlock | SideBySideBlock

type CmsPage = {
  title: string
  content: Block[]
}

// ---------- FETCH FUNCTION ----------
async function getPage(slug: string): Promise<CmsPage> {
  return client.fetch(
    `*[_type == "page" && slug.current == $slug][0]{
      title,
      content[]{
        ...,
        backgroundImage{asset},
        img{asset}
      }
    }`,
    { slug }
  )
}

// ---------- PAGE COMPONENT ----------
export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getPage(params.slug)

  if (!page) return <main className="p-8">Page not found</main>

  return (
    <main>
      {page.content?.map((block, i) => {
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
    </main>
  )
}
