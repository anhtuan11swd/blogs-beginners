import axios from "axios";
import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import "./blogs.css";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1000/api/v1/get-all",
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách bài viết:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="page">
      <div className="py-5 container">
        <h1>Tất cả bài viết</h1>
        <p className="lead">Duyệt qua tất cả các bài viết.</p>
        <div className="row">
          {blogs.map((item) => (
            <div className="mb-4 col-lg-3 col-md-4 col-sm-6" key={item._id}>
              <div className="blog-card">
                <Link className="blog-title" to={`/blogs-page/${item._id}`}>
                  <h4>{item.title}</h4>
                </Link>
                <p className="blog-description">
                  {item.description.slice(0, 400)}
                </p>
                <div className="blog-actions">
                  <Link className="edit-icon" to={`/edit-blog/${item._id}`}>
                    <MdEdit size={24} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
