import client, { previewClient } from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
        <p>{props.node.filename}</p>
      </pre>
    ),
  },
};

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  coverImage,
  'author': author->{name, 'avatar':avatar.asset->url},
`;

export function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}
const getClient = (preview) => (preview ? previewClient : client);
export async function getPaginatedBlogs(
  { offset, date } = { offset: 0, date: 'desc' }
) {
  const results = await client.fetch(
    `*[_type == "blog"]{ ${blogFields} } | order(date ${date})[${offset}...${
      offset + 6
    }]`
  );
  return results;
}

export async function getAllBlogs() {
  const results = await client.fetch(
    `*[_type == "blog"]{ ${blogFields} } | order(date desc)`
  );
  return results;
}
export async function getBlogBySlug(slug, preview = false) {
  const currentClient = getClient(preview);
  const result = await client
    .fetch(
      `*[_type=="blog" && slug.current == $slug] {
    ${blogFields} content[]{..., "asset": asset->}
  }`,
      { slug }
    )
    .then((res) => (preview ? res?.[1] : res?.[0]));

  return result;
}
