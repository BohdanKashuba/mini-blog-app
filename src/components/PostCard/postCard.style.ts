import styled from "styled-components";

export const PostCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  padding: 20px;
  border-radius: 14px;
  background-color: var(--text-light-color);
`;

export const PostCardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    color: var(--primary-color);
  }
`;

export const PostCardActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  span {
    font-size: 0.8rem;
    color: var(--secondary-color);
  }
`;
