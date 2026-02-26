import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar-wrapper">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand fw-bold" to="/">
            <h4 className="m-0 brand-text">Blogs</h4>
          </Link>
          <button
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-bs-target="#navbarNav"
            data-bs-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="ms-auto navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">
                  Bài viết
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create-blogs">
                  Tạo bài viết
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <hr className="navbar-divider" />
      </div>
    </nav>
  );
}

export default Navbar;
