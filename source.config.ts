import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    // options for `doc` collection
  },
  meta: {
    // options for `meta` collection
  },
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
