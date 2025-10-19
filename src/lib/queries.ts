export const navQuery = `
  *[_type == "page" && defined(slug.current)]{
    "href": select(slug.current == "home" => "/", "/" + slug.current),
    title,
    order
  } | order(order asc)
`
