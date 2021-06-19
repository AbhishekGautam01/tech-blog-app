import { useSWRPages } from 'swr';
import { useGetBlogs } from 'actions';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';
import { Col } from 'react-bootstrap';
import CardItemBlank from 'components/CardItemBlank';
import CardListItemBlank from 'components/CardListItemBlank';
import moment from 'moment';

const BlogList = ({ blogs, filter }) => {
  return blogs.map((blog) =>
    filter.view.list ? (
      <Col key={`${blog.slug}-list`} md="10">
        <CardListItem
          title={blog.title}
          subtitle={blog.subtitle}
          date={moment(blog.date).format('LLL')}
          author={blog.author?.name || 'Anonymous'}
          authorImage={blog.author?.avatar || 'https://via.placeholder.com/150'}
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
          date={moment(blog.date).format('LLL')}
          coverImage={blog.coverImage}
          author={blog.author?.name || 'Anonymous'}
          authorImage={blog.author?.avatar || 'https://via.placeholder.com/150'}
          link={{
            href: '/blog/[slug]',
            as: `/blog/${blog.slug}`,
          }}
        />
      </Col>
    )
  );
};

export const useGetBlogsPages = ({ blogs, filter }) => {
  return useSWRPages(
    'index-page',
    ({ offset, withSWR }) => {
      const { data: paginatedBlogs, error } = withSWR(
        useGetBlogs({ offset, filter })
      );
      if (!offset && !paginatedBlogs && !error) {
        return <BlogList blogs={blogs} filter={filter} />;
      }
      if (!paginatedBlogs) {
        return Array(3)
          .fill(0)
          .map((_, i) =>
            filter.view.list ? (
              <Col key={i} md="9">
                <CardListItemBlank mode="placeholder" />
              </Col>
            ) : (
              <Col key={`${i}-item`} md="4">
                <CardItemBlank />
              </Col>
            )
          );
      }
      return <BlogList blogs={paginatedBlogs} filter={filter} />;
    },
    // here you will compute offset that will get passed into previous callback function
    // SWR: data you will get from 'withSWR' and index is number of current page
    (SWR, index) => {
      if (SWR.data && SWR.data.length === 0) {
        return null;
      }
      return (index + 1) * 6;
    },
    [filter.view.list, filter.date.asc]
  );
};
