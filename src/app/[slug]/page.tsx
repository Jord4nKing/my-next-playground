import { client } from "@/app/lib/sanity"
import BlockRenderer, { Block } from "@/components/BlockRenderer"

export const revalidate = 0

// ---------- TYPES ----------
interface PageProps {
  params: {
    slug: string
  }
}

type CmsPage = {
  title: string
  content: Block[]
}

// ---------- FETCH ----------
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

// ---------- PAGE ----------
export default async function Page({ params }: PageProps) {
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
