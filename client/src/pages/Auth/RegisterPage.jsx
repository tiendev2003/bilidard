import { Link } from "react-router-dom";
import { Breadcrumb } from "../../components";

const RegisterPage = () => {
  return (
    <>
         <Breadcrumb title="Đăng ký" items="Đăng ký" />

      <div className="login-area py-120">
        <div className="container">
          <div className="col-md-5 mx-auto">
            <div className="login-form">
              <div className="login-header">
                <img src="../assets/img/logo/logo-dark.png" alt="" />
                <p>Tạo tài khoản BillardBooking</p>
              </div>
              <form action="#">
                <div className="form-group">
                  <label>Họ và Tên</label>
                  <div className="form-group-icon">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập họ và tên"
                    />
                    <i className="fa fa-user"></i>
                  </div>
                </div>
                <div className="form-group">
                  <label>Email & Số điện thoại</label>
                  <div className="form-group-icon">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Nhập email hoặc số điện thoại"
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
                <div className="form-check form-group">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value
                    id="agree"
                  />
                  <label className="form-check-label" htmlFor="agree">
                    Tôi đồng ý với <Link href="/terms">Điều khoản dịch vụ.</Link>
                  </label>
                </div>
                <div className="d-flex align-items-center">
                  <button type="submit" className="theme-btn">
                    <i className="far fa-paper-plane"></i> Đăng ký
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
                  Bạn đã có tài khoản? <Link to="/login">Đăng nhập.</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegisterPage;
