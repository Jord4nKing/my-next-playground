// @ts-expect-error – Next.js mis-types dynamic route params in this version
export default function Page({ params }: { params: { slug: string } }) {
    return <main>Slug is: {params.slug}</main>
  }
  