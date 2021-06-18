import BlockContent from '@sanity/block-content-to-react';

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

const BlogContent = ({ content }) => (
  <BlockContent
    blocks={content}
    serializers={serializers}
    imageOptions={{
      w: 320,
      h: 240,
      fit: 'max',
    }}
  />
);

export default BlogContent;
