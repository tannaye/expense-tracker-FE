import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <div className="d-flex">
      <div className="aside d-none d-lg-block ">
        <div className="aside-menu-list m-2  mt-5">
          <Link to="/" className="aside-menu-list-item ml-auto">
            <div className="d-flex align-items-center mt-4">
              <p className="fs-18">Dashboard</p>
            </div>
          </Link>

          <Link to="categories" className="aside-menu-list-item">
            <div className="d-flex align-items-center mt-4">
              <p className="fs-18">Categories</p>
            </div>
          </Link>

          <Link to="expenses" className="aside-menu-list-item">
            <div className="d-flex align-items-center mt-4">
              <p className="fs-18">Expenses</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Aside;
