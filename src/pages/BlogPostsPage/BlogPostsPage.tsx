import PageWrapper from "../../components/PageWrapper";
import BlogList from "../../sections/blogList";

const BlogPostsPage = (): JSX.Element => {
  return (
    <PageWrapper title="Blog">
      <BlogList />
    </PageWrapper>
  );
};

export default BlogPostsPage;
