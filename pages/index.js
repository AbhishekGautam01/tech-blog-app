import { Row, Button } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorInfo from 'components/AuthorIntro';
import { useGetBlogsPages } from 'actions/pagination';
import FilteringMenu from 'components/FilteringMenu';
import { getAllBlogs } from 'lib/api';
import { useState } from 'react';

export default function Home({ blogs }) {
  const [filter, setFilter] = useState({
    view: { list: false },
  });
  const { pages, isLoadingMore, isReachingEnd, loadMore } = useGetBlogsPages({
    blogs,
    filter,
  });

  return (
    <PageLayout>
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
export async function getStaticProps() {
  const blogs = await getAllBlogs({ offset: 0 });
  return {
    props: {
      blogs,
    },
  };
}
