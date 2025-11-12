import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    authors: defineCollection({
      type: 'data',
      source: 'authors/**.json',
      schema: z.object({
        name: z.string(),
        avatar: z.string(),
        url: z.string()
    })
    })
  }
})