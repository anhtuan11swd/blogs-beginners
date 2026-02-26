import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./writeAndUpdate.css";

function WriteAndUpdate() {
  const [blog, setBlog] = useState({ description: "", title: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        try {
          const response = await axios.get(
            `http://localhost:1000/api/v1/get-blog/${id}`,
          );
          setBlog({
            description: response.data.description,
            title: response.data.title,
          });
        } catch (error) {
          console.error("Lỗi khi lấy blog:", error);
        }
      };
      fetchBlog();
    }
  }, [id]);

  const change = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    setLoading(true);
    try {
      if (id) {
        await axios.put(`http://localhost:1000/api/v1/update-blog/${id}`, blog);
        alert("Dữ liệu đã được cập nhật thành công");
      } else {
        await axios.post("http://localhost:1000/api/v1/post", blog);
        alert("Dữ liệu đã được lưu thành công");
      }
      navigate("/blogs");
    } catch (error) {
      console.error("Lỗi khi lưu blog:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="py-5 container">
        <h3>{id ? "Cập nhật bài viết" : "Viết bài viết"}</h3>
        <div className="d-flex flex-column gap-3 write-form">
          <label className="form-label" htmlFor="blog-title">
            Tiêu đề
          </label>
          <input
            className="blog-input"
            id="blog-title"
            name="title"
            onChange={change}
            placeholder="Nhập tiêu đề bài viết"
            type="text"
            value={blog.title}
          />
          <label className="form-label" htmlFor="blog-description">
            Mô tả
          </label>
          <textarea
            className="blog-textarea"
            id="blog-description"
            name="description"
            onChange={change}
            placeholder="Viết mô tả của bạn ở đây..."
            rows="10"
            value={blog.description}
          />
          <button
            className="add-blog-btn"
            disabled={loading}
            onClick={submit}
            type="button"
          >
            {loading
              ? "Đang lưu..."
              : id
                ? "Cập nhật bài viết"
                : "Thêm bài viết"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default WriteAndUpdate;
