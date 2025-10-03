import Image from "next/image"
import { client, urlFor } from "./lib/sanity"

interface Post {
  title: string
  body: string
  mainImage?: {
    asset: {
      _ref: string
      _type: string
    }
  }
}

async function getPosts(): Promise<Post[]> {
  return client.fetch(`*[_type == "post"]{title, body, mainImage{asset}}`)
}



export default async function HomePage() {
  const posts = await getPosts()

  return (
    <main>
      <h1>Sanity Posts</h1>
      {posts.map((post, i) => (
        <article key={i}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>

          {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).width(800).url()}
              alt={post.title || "Post image"}
              width={800}
              height={500}
            />
          )}
        </article>
      ))}
    </main>
  )
}
