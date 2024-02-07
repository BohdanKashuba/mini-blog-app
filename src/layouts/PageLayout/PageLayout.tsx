import { Outlet } from "react-router-dom";
import Header from "../../sections/header/Header";
import Footer from "../../sections/footer";
import { Main, PageLayoutWrapper } from "./pageLayout.style";

const PageLayout = () => {
  return (
    <PageLayoutWrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </PageLayoutWrapper>
  );
};

export default PageLayout;
