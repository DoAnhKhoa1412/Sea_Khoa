import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Đảm bảo bạn đã tạo file CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">
            Trang Chủ
          </Link>
        </li>
        <li>
          <Link to="/fish-info" className="navbar-link">
            Thông Tin Cá
          </Link>
        </li>
        <li>
          <Link to="/search" className="navbar-link">
            Tìm Kiếm
          </Link>
        </li>
        <li>
          <button className="navbar-button">Liên Hệ</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
