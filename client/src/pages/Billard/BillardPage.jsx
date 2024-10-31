import { Link } from "react-router-dom";
import { Breadcrumb } from "../../components";

export const BillardPage = () => {
  return (
    <>
      <Breadcrumb title="Billard Club" items="Billard Club" />

      <div className="billard-grid py-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-3 mb-4">
              <div className="booking-sidebar">
                <div className="booking-item">
                  <h4 className="booking-title">Vị trí</h4>
                  <div className="facility">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="facility"
                        type="checkbox"
                        value="1"
                        id="facility1"
                      />
                      <label className="form-check-label" htmlFor="facility1">
                        TP.Hồ Chí Minh <span>(20)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="facility"
                        type="checkbox"
                        value="2"
                        id="facility2"
                      />
                      <label className="form-check-label" htmlFor="facility2">
                        Hà Nội <span>(15)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="facility"
                        type="checkbox"
                        value="3"
                        id="facility3"
                      />
                      <label className="form-check-label" htmlFor="facility3">
                        Cần Thơ <span>(18)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="facility"
                        type="checkbox"
                        value="4"
                        id="facility4"
                      />
                      <label className="form-check-label" htmlFor="facility4">
                        Bình Dương <span>(35)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="facility"
                        type="checkbox"
                        value="5"
                        id="facility5"
                      />
                      <label className="form-check-label" htmlFor="facility5">
                        Hải Phòng <span>(12)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="facility"
                        type="checkbox"
                        value="6"
                        id="facility6"
                      />
                      <label className="form-check-label" htmlFor="facility6">
                        Đà Nẵng <span>(18)</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="booking-item">
                  <h4 className="booking-title">Mức giá VNĐ</h4>
                  <div className="billard-star">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="billard-price"
                        type="checkbox"
                        value="1"
                        id="billard-price1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="billard-price11"
                      >
                        0 - 50 <span>(20)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="billard-price"
                        type="checkbox"
                        value="2"
                        id="billard-price2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="billard-price2"
                      >
                        50 - 100 <span>(15)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="billard-price"
                        type="checkbox"
                        value="3"
                        id="billard-price3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="billard-price3"
                      >
                        Trên 100 <span>(18)</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="booking-item">
                  <h4 className="booking-title">Đánh giá</h4>
                  <div className="billard-star">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="billard-star"
                        type="checkbox"
                        value="1"
                        id="billard-star1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="billard-star1"
                      >
                        5 sao <span>(20)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="billard-star"
                        type="checkbox"
                        value="2"
                        id="billard-star2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="billard-star2"
                      >
                        4 sao <span>(15)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="billard-star"
                        type="checkbox"
                        value="3"
                        id="billard-star3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="billard-star3"
                      >
                        3 sao <span>(18)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="billard-star"
                        type="checkbox"
                        value="4"
                        id="billard-star4"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="billard-star4"
                      >
                        2 sao <span>(25)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="billard-star"
                        type="checkbox"
                        value="5"
                        id="billard-star5"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="billard-star5"
                      >
                        1 sao <span>(27)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-xl-9">
              <div className="col-md-12">
                <div className="booking-sort">
                  <h5>2,350 Kết quả tìm thấy</h5>
                  <div className="col-md-3 booking-sort-box">
                    <select className="select">
                      <option value="1">Sắp xếp theo mặc định</option>
                      <option value="2">Sắp xếp theo Phổ biến</option>
                      <option value="3">Sắp xếp theo Giá thấp</option>
                      <option value="4">Sắp xếp theo Giá cao</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="billard-item">
                    <div className="billard-img">
                      <span className="badge">Nổi bật</span>
                      <img src="../assets/img/billard/01.jpeg" alt="" />
                      <a href="#" className="add-wishlist">
                        <i className="far fa-heart"></i>
                      </a>
                    </div>
                    <div className="billard-content">
                      <h4 className="billard-title">
                        <a href="#">Billard Club</a>
                      </h4>

                      <p>
                        <i className="fa-solid fa-location-crosshairs"></i> 256
                        Phan Huy Ích, P.12, Q.Gò Vấp, TP.HCM
                      </p>
                      <div className="billard-rate">
                        <span className="badge">
                          <i className="fa fa-star"></i> 5.0
                        </span>

                        <span className="billard-rate-review">
                          (2.5k Reviews)
                        </span>
                      </div>

                      <div className="billard-bottom">
                        <div className="billard-price">
                          <span className="billard-price-amount">
                            90.000đ{" "}
                            <span className="billard-price-type">/Giờ</span>
                          </span>
                        </div>
                        <div className="billard-text-btn">
                          <a href="#">
                            Chi tiết <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="billard-item">
                    <div className="billard-img">
                      <img src="../assets/img/Namebillard/01.jpeg" alt="" />
                      <a href="#" className="add-wishlist">
                        <i className="far fa-heart"></i>
                      </a>
                    </div>
                    <div className="billard-content">
                      <h4 className="billard-title">
                        <Link href="#">Billard Club</Link>
                      </h4>

                      <p>
                        <i className="fa-solid fa-location-crosshairs"></i> 256
                        Phan Huy Ích, P.12, Q.Gò Vấp, TP.HCM
                      </p>

                      <div className="billard-rate">
                        <span className="badge">
                          <i className="fa fa-star"></i> 5.0
                        </span>
                        <span className="billard-rate-review">
                          (2.5k Reviews)
                        </span>
                      </div>

                      <div className="billard-bottom">
                        <div className="billard-price">
                          <span className="billard-price-amount">
                            90.000đ{" "}
                            <span className="billard-price-type">/Giờ</span>
                          </span>
                        </div>

                        <div className="billard-text-btn">
                          <a href="#">
                            Chi tiết <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="billard-item">
                    <div className="billard-img">
                      <span className="badge badge-discount">Giảm 25%</span>
                      <img src="../assets/img/billard/01.jpeg" alt="" />
                      <a href="#" className="add-wishlist">
                        <i className="far fa-heart"></i>
                      </a>
                    </div>

                    <div className="billard-content">
                      <h4 className="billard-title">
                        <a href="#">Billard Club</a>
                      </h4>

                      <p>
                        <i className="fa-solid fa-location-crosshairs"></i> 256
                        Phan Huy Ích, P.12, Q.Gò Vấp, TNameP.HCM
                      </p>
                      <div className="billard-rate">
                        <span className="badge">
                          <i className="fa fa-star"></i> 5.0
                        </span>

                        <span className="billard-rate-review">
                          (2.5k Reviews)
                        </span>
                      </div>

                      <div className="billard-bottom">
                        <div className="billard-price">
                          <span className="billard-price-amount">
                            90.000đ{" "}
                            <span className="billard-price-type">/Giờ</span>
                          </span>
                        </div>
                        <div className="billard-text-btn">
                          <a href="#">
                            Chi tiết <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pagination-area">
                  <div aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">
                            <i className="fa fa-angle-double-left"></i>
                          </span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">
                            <i className="fa fa-angle-double-right"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="pagination-showing">
                    <p>Hiển thị 1 - 6 of 24 Billard Club</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
