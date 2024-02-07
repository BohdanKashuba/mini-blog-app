// contexts
import { BlogDataProvider } from "./contexts/BlogDataContext";
// routes
import Router from "./routes";

function App() {
  return (
    <BlogDataProvider>
      <Router />
    </BlogDataProvider>
  );
}

export default App;
