import { client } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"

export default async function HomePage() {
  const home = await client.fetch(`*[_type == "page" && slug.current == "home"][0]`)

  if (!home) return <main>No Home page found in Sanity</main>

  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">{home.title}</h1>
      {home.content && <PortableText value={home.content} />}
    </main>
  )
}
