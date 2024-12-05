import React from "react";
import { Link } from "react-router-dom"; // Thêm Link để chuyển trang khi nhấn nút
import "./styles.css"; // Import file CSS

const Home = () => {
  return (
    <div className="home-container">
      <h1>Chào Mừng Đến Với Thế Giới Các Loài Sinh Vật Đại Dương!</h1>
      <p>Khám phá những sinh vật tuyệt vời sống ở đại dương.</p>
      <Link to="/fish-info">
        <button className="start-button">Bắt Đầu</button>
      </Link>
    </div>
  );
};

export default Home;
