import { defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'subtitle' },
    prepare({ title, subtitle }) {
      return {
        title: `Hero: ${title}`,
        subtitle,
      }
    },
  },
})
