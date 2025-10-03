import { client } from "@/app/lib/sanity"
import BlockRenderer, { Block } from "@/components/BlockRenderer"

export const revalidate = 0

type CmsPage = {
  title: string
  content: Block[]
}

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

export default async function Page({
  params,
}: {
  params: { slug: string }
}) {
  const page = await getPage(params.slug)

  if (!page) {
    return <main className="p-8">Page not found</main>
  }

  return (
    <main>
      <BlockRenderer blocks={page.content} />
    </main>
  )
}
