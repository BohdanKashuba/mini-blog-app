import { useBlogDataContext } from "../../contexts/BlogDataContext";
import PostCard from "../../components/PostCard";
import { BlogListWrapper } from "./blogList.style";

const BlogList = (): JSX.Element => {
  const { blogData } = useBlogDataContext();

  return (
    <BlogListWrapper>
      {blogData.map(({ title, body, id, createdAt }) => (
        <PostCard
          key={id}
          title={title}
          body={body}
          id={id}
          createdAt={createdAt}
        />
      ))}
    </BlogListWrapper>
  );
};

export default BlogList;
