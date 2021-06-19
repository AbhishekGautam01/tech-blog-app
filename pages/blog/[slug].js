import PageLayout from 'components/PageLayout';
import BlogHeader from 'components/BlogHeader';
import { getBlogBySlug, getPaginatedBlogs } from 'lib/api';
import { Row, Col } from 'react-bootstrap';
import BlogContent from 'components/BlogContent';
import { urlFor } from 'lib/api';
import moment from 'moment';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

const BlogDetail = ({ blog }) => {
  const router = useRouter();
  if (!router.isFallback && !blog?.slug) {
    return <ErrorPage statusCode="404" />;
  }

  if (router.isFallback) {
    return <PageLayout classname="blog-detail-page">Loading...</PageLayout>;
  }

  return (
    <PageLayout className="blog-detail-page">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            coverImage={urlFor(blog.coverImage).height(600).url()}
            author={blog.author}
            date={moment(blog.date).format('LL')}
          />
          <hr />
          {blog.content && <BlogContent content={blog.content} />}
        </Col>
      </Row>
    </PageLayout>
  );
};

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: { blog },
  };
}

export async function getStaticPaths() {
  const blogs = await getPaginatedBlogs({ offset: 0, date: 'desc' });
  const paths = blogs?.map((blog) => {
    return {
      params: {
        slug: blog.slug,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}
export default BlogDetail;
