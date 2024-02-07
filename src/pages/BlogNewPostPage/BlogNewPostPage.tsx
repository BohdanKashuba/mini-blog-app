import { useNavigate } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import Button from "../../components/Button";
import NewPostForm from "../../sections/newPostForm";
import {
  CreatePostData,
  useBlogDataContext,
} from "../../contexts/BlogDataContext";
import { PATH_PAGE } from "../../routes/paths";

const BlogNewPostPage = (): JSX.Element => {
  const { createNewPost } = useBlogDataContext();

  const navigate = useNavigate();

  const handleOnBack = () => {
    navigate(-1);
  };

  const handleCreateNewPost = (data: CreatePostData) => {
    createNewPost(data);
    navigate(PATH_PAGE.blog.root);
  };

  return (
    <PageWrapper
      title="New Post"
      action={<Button onClick={handleOnBack}>Back</Button>}
    >
      <NewPostForm onSubmit={handleCreateNewPost} />
    </PageWrapper>
  );
};

export default BlogNewPostPage;
