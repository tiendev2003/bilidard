import { Link } from "react-router-dom";
import { Breadcrumb } from "../../components";

const LoginPage = () => {
  return (
    <>
      <Breadcrumb title="Đăng nhập" items="Đăng nhập" />

      <div className="login-area py-120">
        <div className="container">
          <div className="col-md-5 mx-auto">
            <div className="login-form">
              <div className="login-header">
                <img src="../assets/img/logo/logo-dark.png" alt="" />
                <p> Đăng nhập bằng tài khoản BillardBooking</p>
              </div>
              <form action="#">
                <div className="form-group">
                  <label>Email & Số điện thoại</label>
                  <div className="form-group-icon">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Nhập email hoặc eố điện thoại"
                    />
                    <i className="fa-solid fa-address-book"></i>
                  </div>
                </div>
                <div className="form-group">
                  <label>Mật khẩu</label>
                  <div className="form-group-icon">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Nhập mật khẩu"
                    />
                    <i className="fa fa-lock"></i>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value
                      id="remember"
                    />
                    <label className="form-check-label" htmlFor="remember">
                      Ghi nhớ
                    </label>
                  </div>
                  <Link to="/forgot-password" className="forgot-pass">
                    Quên mật khẩu?
                  </Link>
                </div>
                <div className="d-flex align-items-center">
                  <button type="submit" className="theme-btn">
                    <i className="fa fa-sign-in"></i> Đăng nhập
                  </button>
                </div>
              </form>
              <div className="login-footer">
                <div className="login-divider">
                  <span>Or</span>
                </div>
                <div className="social-login">
                  <a href="#" className="btn-fb">
                    <i className="fa-brands fa-facebook"></i> Facebook
                  </a>
                  <a href="#" className="btn-gl">
                    <i className="fa-brands fa-google"></i> Google
                  </a>
                </div>
                <p>
                  Bạn chưa có tài khoản?? <Link to="r/register">Đăng ký.</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
