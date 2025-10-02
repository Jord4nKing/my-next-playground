import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// 👇 Create the Sanity client
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // from .env.local
  dataset: 'production', // default dataset
  apiVersion: '2025-10-02', // use today’s date for stability
  useCdn: true, // `false` if you want always-fresh data
})

// 👇 Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
