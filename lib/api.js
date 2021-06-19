import client from './sanity';
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

export async function getAllBlogs(
  { offset, date } = { offset: 0, date: 'desc' }
) {
  const results = await client.fetch(
    `*[_type == "blog"]{ ${blogFields} } | order(date ${date})[${offset}...${
      offset + 6
    }]`
  );
  return results;
}

export async function getBlogBySlug(slug) {
  const result = await client
    .fetch(
      `*[_type=="blog" && slug.current == $slug] {
    ${blogFields} content[]{..., "asset": asset->}
  }`,
      { slug }
    )
    .then((res) => res?.[0]);

  return result;
}
