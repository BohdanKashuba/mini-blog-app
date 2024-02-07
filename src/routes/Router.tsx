import { Navigate, useRoutes } from "react-router-dom";
//
import {
  // Blog
  BlogPostsPage,
  BlogPostPage,
  BlogNewPostPage,
  // Other
  Page404,
} from "./elements";
// layouts
import PageLayout from "../layouts/PageLayout";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // BLOG
    {
      element: <PageLayout />,
      children: [
        { path: "/", element: <Navigate to="/blog" replace />, index: true },
        {
          path: "blog",
          children: [
            { path: "", element: <BlogPostsPage /> },
            { path: ":id", element: <BlogPostPage /> },
            { path: "new", element: <BlogNewPostPage /> },
          ],
        },
      ],
    },
    {
      element: <PageLayout />,
      children: [{ path: "404", element: <Page404 /> }],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
