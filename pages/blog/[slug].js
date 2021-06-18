import PageLayout from 'components/PageLayout';
import { getBlogBySlug, getAllBlogs } from 'lib/api';

const BlogDetail = ({ blog }) => {
  return (
    <PageLayout>
      <h1>Hello {blog?.slug}</h1>
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
  const blogs = await getAllBlogs();
  const paths = blogs?.map((blog) => {
    return {
      params: {
        slug: blog.slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export default BlogDetail;
