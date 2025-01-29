import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: "https://ianlizl.github.io",  // ✅ Correct syntax
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: "noopener noreferrer nofollow",
        },
      ],
    ],
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
