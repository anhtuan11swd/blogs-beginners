import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import BlogDetail from "./pages/BlogDetail";
import Blogs from "./pages/Blogs";
import CreateBlog from "./pages/CreateBlog";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Blogs />} path="/blogs" />
        <Route element={<CreateBlog />} path="/create-blogs" />
        <Route element={<BlogDetail />} path="/blogs-page/:id" />
      </Routes>
    </Router>
  );
}

export default App;
