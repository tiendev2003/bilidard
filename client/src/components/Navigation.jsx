// Navigation.js
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logoDark from "../assets/img/logo/logo-dark.png";
import logo from "../assets/img/logo/logo.png";
import { handleScroll } from "../utils/script.js";
const Navigation = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const onScroll = () => handleScroll(navbarRef);

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="main-navigation">
      <nav className="navbar navbar-expand-lg" ref={navbarRef}>
        <div className="container">
          <a className="navbar-brand" to="index.html">
            <img src={logo} className="logo-display" alt="logo" />
            <img src={logoDark} className="logo-scrolled" alt="logo" />
          </a>
          <div className="mobile-menu-right">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-btn-icon">
                <i className="fa fa-bars" />
              </span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  to="#"
                  data-bs-toggle="dropdown"
                >
                  Danh sách quán
                </a>
                <ul className="dropdown-menu fade-down">
                  <li>
                    <Link className="dropdown-item" to="/billard">
                      Quán mới
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Quán hot
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Khuyến mãi
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Đối tác
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  to="#"
                  data-bs-toggle="dropdown"
                >
                  Hỗ trợ
                </a>
                <ul className="dropdown-menu fade-down">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Khách hàng
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Lịch đặt bàn
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Tuyển dụng
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Liên hệ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Giới thiệu
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Chính sách
                </a>
                <ul className="dropdown-menu fade-down">
                  <li>
                    <Link className="dropdown-item" to="/privacy">
                      Chính sách khách hàng
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/terms">
                      Chính sách bảo mật
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Tuyển dụng
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="header-nav-right">
              <div className="header-btn">
                <a to="#" className="theme-btn mt-2">
                  Đăng ký ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
