import { useNavigate } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import PostDetail from "../../sections/postDetail";
import Button from "../../components/Button";

const BlogPostPage = (): JSX.Element => {
  const navigate = useNavigate();

  const handleOnBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper
      title="Blog Details"
      action={<Button onClick={handleOnBack}>Back</Button>}
    >
      <PostDetail />
    </PageWrapper>
  );
};

export default BlogPostPage;
