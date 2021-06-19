import { Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorInfo from 'components/AuthorIntro';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';
import FilteringMenu from 'components/FilteringMenu';
import { getAllBlogs } from 'lib/api';
import { useState } from 'react';
import { useGetBlogs } from 'actions';

export default function Home({ blogs: initialData }) {
  const [filter, setFilter] = useState({
    view: { list: false },
  });

  const { data: blogs, error } = useGetBlogs(initialData);

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
      <Row className="mb-5">
        {blogs.map((blog) =>
          filter.view.list ? (
            <Col key={`${blog.slug}-list`} md="10">
              <CardListItem
                title={blog.title}
                subtitle={blog.subtitle}
                date={blog.date}
                author={blog.author?.name || 'Anonymous'}
                authorImage={
                  blog.author?.avatar || 'https://via.placeholder.com/150'
                }
                link={{
                  href: '/blog/[slug]',
                  as: `/blog/${blog.slug}`,
                }}
              />
            </Col>
          ) : (
            <Col key={blog.slug} md="4">
              <CardItem
                title={blog.title}
                subtitle={blog.subtitle}
                date={blog.date}
                coverImage={blog.coverImage}
                author={blog.author?.name || 'Anonymous'}
                authorImage={
                  blog.author?.avatar || 'https://via.placeholder.com/150'
                }
                link={{
                  href: '/blog/[slug]',
                  as: `/blog/${blog.slug}`,
                }}
              />
            </Col>
          )
        )}
      </Row>
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
