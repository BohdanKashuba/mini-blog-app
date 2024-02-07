import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: var(--primary-color);
  color: var(--text-light-color);
  border-radius: 8px;
  border: none;
  padding: 10px 20px;
  height: 40px;
  cursor: pointer;
  font-size: 1rem;

  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
