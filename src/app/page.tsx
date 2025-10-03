import Page from "./[slug]/page"

// 👇 tell it to use the Sanity page with slug=home
// @ts-expect-error – we’re reusing the dynamic component
export default function Home() {
  return <Page params={{ slug: "home" }} />
}
