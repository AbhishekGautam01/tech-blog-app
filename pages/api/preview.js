import { getBlogBySlug } from 'lib/api';

export default async function enablePreview(req, res) {
  if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET || !req.query.slug)
    return res.status(401).json({ message: 'Invalid Token' });

  const blog = await getBlogBySlug(req.query.slug);
  if (!blog) return res.status(401).json({ message: 'Invalid Slug' });
  res.setPreviewData({ message: 'Hello World' });
  res.writeHead(307, { Location: `/blog/${blog.slug}` });
  res.end();
}
