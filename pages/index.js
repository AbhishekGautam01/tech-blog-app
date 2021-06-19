import { Row, Button } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorInfo from 'components/AuthorIntro';
import { useGetBlogsPages } from 'actions/pagination';
import FilteringMenu from 'components/FilteringMenu';
import { getPaginatedBlogs } from 'lib/api';
import { useState } from 'react';
import PreviewAlert from 'components/PreviewAlert';
export default function Home({ blogs, preview }) {
  const [filter, setFilter] = useState({
    view: { list: false },
    date: { asc: false },
  });
  const { pages, isLoadingMore, isReachingEnd, loadMore } = useGetBlogsPages({
    blogs,
    filter,
  });

  return (
    <PageLayout>
      {preview && <PreviewAlert />}
      <AuthorInfo />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          setFilter({ ...filter, [option]: value });
        }}
      />
      <hr />
      <Row className="mb-5">{pages}</Row>
      {
        <div style={{ textAlign: 'center' }}>
          <Button
            variant="outline-secondary"
            size="lg"
            onClick={loadMore}
            disabled={isReachingEnd || isLoadingMore}
          >
            {isLoadingMore
              ? '...'
              : isReachingEnd
              ? 'No More Blogs'
              : 'More Blogs'}
          </Button>
        </div>
      }
    </PageLayout>
  );
}

// This function is called during the build i.e always called on server and never on client and provides props to your page and it will create static page.
export async function getStaticProps({ preview = false }) {
  const blogs = await getPaginatedBlogs({ offset: 0, date: 'desc' });
  return {
    props: {
      blogs,
      preview,
    },
    revalidate: 1,
  };
}
