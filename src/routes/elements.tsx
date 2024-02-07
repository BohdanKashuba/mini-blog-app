import React, { Suspense, lazy, ReactElement } from "react";
import LoadingScreen from "../components/loadingScreen";

// ----------------------------------------------------------------------

const Loadable =
  <P extends object>(
    Component: React.ComponentType<P>
  ): React.ComponentType<P> =>
  (props: P): ReactElement => (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

// BLOG
export const BlogPostsPage = Loadable(
  lazy(() => import("../pages/BlogPostsPage"))
);
export const BlogPostPage = Loadable(
  lazy(() => import("../pages/BlogPostPage"))
);
export const BlogNewPostPage = Loadable(
  lazy(() => import("../pages/BlogNewPostPage"))
);

export const Page404 = Loadable(lazy(() => import("../pages/Page404")));
