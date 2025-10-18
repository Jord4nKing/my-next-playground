import { client } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(
    `*[_type == "page" && defined(slug.current)][].slug.current`
  )
  return slugs.map((slug) => ({ slug }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await client.fetch(
    `*[_type == "page" && slug.current == $slug][0]`,
    { slug: params.slug }
  )

  if (!page) return <main>Page not found</main>

  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">{page.title}</h1>
      {page.content && <PortableText value={page.content} />}
    </main>
  )
}
