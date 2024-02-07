import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
// utils
import { _blogList } from "../_moks";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  createdAt: Date;
}

export interface CreatePostData {
  title: string;
  body: string;
}

interface DefaultData {
  blogData: Post[];
}

const defaultData: DefaultData = {
  blogData: _blogList,
};

interface BlogState extends DefaultData {
  createNewPost: (data: CreatePostData) => void;
}

const initialState: BlogState = {
  ...defaultData,
  createNewPost: () => {}, // default implementation
};

export const BlogDataContext = createContext(initialState);

export const useBlogDataContext = () => {
  const context = useContext(BlogDataContext);

  if (!context)
    throw new Error("useBlogDataContext must be use inside BlogDataProvider");

  return context;
};

export function BlogDataProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<DefaultData>(defaultData);

  const createNewPost = useCallback(({ title, body }: CreatePostData) => {
    setData((prevState) => ({
      ...prevState,
      blogData: [
        ...prevState.blogData,
        {
          userId: 1,
          id: prevState.blogData.length + 1,
          title,
          body,
          createdAt: new Date(),
        },
      ],
    }));
  }, []);

  const value = useMemo(
    () => ({
      ...data,
      createNewPost,
    }),
    [data, createNewPost]
  );

  return (
    <BlogDataContext.Provider value={value}>
      {children}
    </BlogDataContext.Provider>
  );
}
