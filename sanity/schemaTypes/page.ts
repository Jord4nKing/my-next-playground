import { defineType } from "sanity"

export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    { name: "title", title: "Page Title", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    {
      name: "content",
      title: "Page Content",
      type: "array",
      of: [
        { type: "hero" },
        { type: "sideBySide" },
        // later add { type: "slider" } here
      ],
    },
  ],
})
