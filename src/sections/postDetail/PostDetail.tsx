import { useParams, Navigate } from "react-router-dom";
import { useBlogDataContext } from "../../contexts/BlogDataContext";
import { PostDetailWrapper } from "./postDetail.style";
import { PATH_PAGE } from "../../routes/paths";

const PostDetail = () => {
  const { id } = useParams();

  const { blogData } = useBlogDataContext();

  const currenPost = id && blogData.find((post) => post.id === Number(id));

  if (!currenPost) {
    return <Navigate to={PATH_PAGE.blog.root} />;
  }

  return (
    <PostDetailWrapper>
      <h2>{currenPost.title}</h2>
      <h5>user id: {currenPost.userId}</h5>
      <h5>created at: {currenPost.createdAt.toLocaleString()}</h5>
      <p>{currenPost.body}</p>
    </PostDetailWrapper>
  );
};

export default PostDetail;
