import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MyArticle from "./Pages/MyArticle";
import MyFeeds from "./Pages/MyFeeds";
import { default as MyPost } from "./Pages/MyPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post" element={<MyPost />}></Route>
        <Route path="/createFeeds" element={<MyFeeds />}></Route>
        <Route path="/article" element={<MyArticle />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
