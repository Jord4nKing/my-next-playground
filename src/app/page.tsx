import { client } from "@/app/lib/sanity"
import BlockRenderer, { Block } from "@/components/BlockRenderer"

export const revalidate = 0

type CmsPage = {
  title: string
  content: Block[]
}

async function getHomePage(): Promise<CmsPage> {
  return client.fetch(
    `*[_type == "page" && slug.current == "home"][0]{
      title,
      content[]{
        ...,
        backgroundImage{asset},
        img{asset}
      }
    }`
  )
}

export default async function HomePage() {
  const page = await getHomePage()
  if (!page) return <main className="p-8">Page not found</main>

  return (
    <main>
      <BlockRenderer blocks={page.content} />
    </main>
  )
}
