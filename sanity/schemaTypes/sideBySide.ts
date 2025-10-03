import { defineType } from "sanity"

export default defineType({
  name: "sideBySide",
  title: "Side By Side",
  type: "object",
  fields: [
    { name: "title", type: "string" },
    { name: "text", type: "text" },
    { name: "intro", type: "string" },
    { name: "img", type: "image", options: { hotspot: true } },
    { name: "bgColor", type: "string", description: "Tailwind class (e.g. bg-gray-100)" },
    { name: "textColor", type: "string", description: "Tailwind class (e.g. text-gray-900)" },
    { name: "reverse", type: "boolean" },
  ],
  preview: {
    select: { title: "title", subtitle: "intro", media: "img" },
    prepare({ title, subtitle, media }) {
      return { title: `SideBySide: ${title || "Untitled"}`, subtitle, media }
    },
  },
})
