import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./BlogDetail.css";

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogById = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:1000/api/v1/blogs/get-blog/${id}`,
        );
        setBlog(response.data.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogById();
  }, [id]);

  if (loading) {
    return (
      <div className="page">
        <div className="container">
          <div className="blog-detail-skeleton">
            <div className="skeleton-title" />
            <div className="skeleton-text" />
            <div className="skeleton-text" />
            <div className="skeleton-text" />
            <div className="skeleton-text short" />
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="page">
        <div className="container">
          <div className="error-state">
            <h2>Không tìm thấy bài viết</h2>
            <p>Bài viết này có thể đã bị xóa hoặc không tồn tại.</p>
            <Link className="back-btn" to="/">
              Quay lại trang chủ
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <article className="blog-detail-container">
        <Link className="back-link" to="/">
          <svg
            aria-hidden="true"
            className="back-icon"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Quay lại</title>
            <path
              clipRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              fillRule="evenodd"
            />
          </svg>
          Quay lại
        </Link>
        <header className="blog-detail-header">
          <h1 className="blog-detail-title">{blog.title}</h1>
        </header>
        <div className="blog-detail-content">
          <p>{blog.description}</p>
        </div>
      </article>
    </div>
  );
}

export default BlogDetail;
