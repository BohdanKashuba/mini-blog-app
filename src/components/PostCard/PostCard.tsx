import {
  PostCardActionWrapper,
  PostCardInfoWrapper,
  PostCardStyled,
} from "./postCard.style";
import Button from "../Button";

interface IProps {
  title: string;
  body: string;
  id: number;
  createdAt: Date;
}

const PostCard = ({ title, body, id, createdAt }: IProps) => {
  return (
    <PostCardStyled>
      <PostCardInfoWrapper>
        <h2>{title}</h2>
        <p>{body}</p>
      </PostCardInfoWrapper>
      <PostCardActionWrapper>
        <Button link={`/blog/${id}`}>Details {">"}</Button>
        <span>{createdAt.toLocaleDateString()}</span>
      </PostCardActionWrapper>
    </PostCardStyled>
  );
};

export default PostCard;
