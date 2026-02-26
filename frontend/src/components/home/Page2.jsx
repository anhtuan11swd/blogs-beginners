import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Page2.css";

function Page2() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1000/api/v1/get-all",
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Lỗi khi tải blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecentBlogs();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="blog-grid">
          {[1, 2, 3].map((i) => (
            <div className="blog-card-skeleton" key={i}>
              <div className="skeleton-title" />
              <div className="skeleton-text" />
              <div className="skeleton-text short" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="container">
        <div className="empty-state">
          <p>Chưa có bài viết nào. Hãy là người đầu tiên tạo bài viết!</p>
          <Link className="empty" to="/create-blogs">
            Tạo bài viết
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <Link
            className="blog-card-link"
            key={blog._id}
            style={{ animationDelay: `${index * 0.1}s` }}
            to={`/blogs-page/${blog._id}`}
          >
            <article className="blog-card">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-description">
                {blog.description.slice(0, 300)}...
              </p>
              <span className="blog-read-more">
                Đọc tiếp
                <svg
                  aria-hidden="true"
                  className="arrow-icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mũi tên</title>
                  <path
                    clipRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Page2;
