import { Link } from "react-router-dom";
import "./Page1.css";

function Page1() {
  return (
    <div className="hero-section">
      <div className="hero-glass">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-gradient-text">Tạo Blog</span>
            <br />
            cùng Blogs
          </h1>
          <p className="hero-subtitle">
            Chia sẻ suy nghĩ của bạn với thế giới. Bắt đầu viết ngay hôm nay.
          </p>
          <div className="hero-actions">
            <Link className="hero-btn-primary" to="/create-blogs">
              Bắt Đầu Ngay
            </Link>
            <Link className="hero-btn-secondary" to="/blogs">
              Khám Phá Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
