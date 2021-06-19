import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from './HighlightCode';
import { urlFor } from 'lib/api';

const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => {
      return (
        <HighlightCode language={language}>
          {code}
          <div className="code-filename">{filename}</div>
        </HighlightCode>
      );
    },
    image: ({ node: { asset, alt, position = 'center' } }) => {
      let styles = {};
      if (position === 'left') {
        styles.float = position;
        styles.marginLeft = '30px';
      } else if (position === 'right') {
        styles.float = position;
        styles.marginRight = '30px';
      } else {
        styles.float = position;
      }
      return (
        <div className="block-image" style={{ ...styles }}>
          <img src={urlFor(asset.url).height(600).fit('max')} />
          <div className="image-alt">{alt}</div>
        </div>
      );
    },
  },
};

const BlogContent = ({ content }) => (
  <BlockContent blocks={content} serializers={serializers} />
);

export default BlogContent;
