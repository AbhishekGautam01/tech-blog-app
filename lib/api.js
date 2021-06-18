import client from './sanity';

export async function getAllBlogs() {
  const results = await client.fetch(`*[_type == "blog"]`);
  return results;
}
