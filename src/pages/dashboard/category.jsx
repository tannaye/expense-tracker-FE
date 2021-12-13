import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { get } from "../../helpers/axios";
import Aside from "./aside";
import moment from "moment";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import NewCategory from "./newCategory";

function Category() {
  const [categories, setCategories] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    get("expense/categories").then((resp) => {
      setCategories(resp.data.data);
    });
  }, []);

  return (
    <div>
      <div className="d-flex">
        <Aside />
        <div className="p-5 w-100">
          <div className="row">
            <div className="col-lg-3 mb-4">
              <div className="category-card p-2">
                <p className="fs-20">Total Categories</p>

                <p className="fs-20"> {categories.length}</p>
              </div>
            </div>
          </div>

          <div className="d-flex mt-4">
            <h3 className="mr-auto">Categories</h3>

            <button className="btn btn-outline-primary" onClick={openModal}>
              New category
            </button>
          </div>
          <div className="mt-3">
            <div className="row">
              {categories.length &&
                categories.map((data) => {
                  return (
                    <div className="col-lg-3 mb-4">
                      <div className="category-card p-2">
                        <p>{data.title}</p>

                        <Link to={`category/${data._id}`} className="fs-12">
                          View Expenses
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <NewCategory modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
}

export default Category;
