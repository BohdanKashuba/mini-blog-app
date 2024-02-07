import Container from "../../components/Container";
import { HeaderContainer, HeaderWrapper, NavLinks } from "./header.style";
import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          <h1>Logo</h1>
          <NavLinks>
            <Link to="/blog">Blog</Link>
            <Link to="/blog/new">New Post</Link>
          </NavLinks>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
