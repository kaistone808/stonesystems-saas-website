// Stone Systems — Blog Post Schema
// Place this file in your Sanity Studio schemas folder and register it in index.ts

export const blogPost = {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().max(100),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'Draft' },
          { title: 'Published', value: 'Published' },
        ],
        layout: 'radio',
      },
      initialValue: 'Draft',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'targetKeyword',
      title: 'Target Keyword',
      type: 'string',
      description: 'Primary SEO keyword this post targets',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'searchIntent',
      title: 'Search Intent',
      type: 'string',
      options: {
        list: [
          { title: 'Informational', value: 'Informational' },
          { title: 'Navigational', value: 'Navigational' },
          { title: 'Commercial', value: 'Commercial' },
          { title: 'Transactional', value: 'Transactional' },
        ],
        layout: 'dropdown',
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
      options: { dateFormat: 'YYYY-MM-DD' },
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'alternativeText',
      title: 'Alternative Text (Image Alt)',
      type: 'string',
      description: 'Describe the featured image for accessibility and SEO',
    },
    {
      name: 'metaTitle',
      title: 'Meta Title (SEO)',
      type: 'string',
      description: 'Max 60 characters recommended',
      validation: (Rule: any) => Rule.max(60).warning('Keep under 60 characters for best SEO'),
    },
    {
      name: 'metaDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 3,
      description: 'Max 160 characters recommended',
      validation: (Rule: any) =>
        Rule.required().max(160).warning('Keep under 160 characters for best SEO'),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary shown on blog index cards',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishDate',
      media: 'featuredImage',
      status: 'status',
    },
    prepare({ title, subtitle, media, status }: any) {
      return {
        title,
        subtitle: `${status} · ${subtitle || 'No date'}`,
        media,
      };
    },
  },
};
