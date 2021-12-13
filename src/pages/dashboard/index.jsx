import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { get } from "../../helpers/axios";
import Aside from "./aside";
import moment from "moment";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import NewExpense from "./newExpense";
import NewCategory from "./newCategory";

function Dashboard() {
  const [categories, setCategories] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [categoryModalIsOpen, setCategoryIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const openCModal = () => {
    setCategoryIsOpen(true);
  };

  const closeCModal = () => {
    setCategoryIsOpen(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    get("expense/categories").then((resp) => {
      setCategories(resp.data.data);
    });
    get("expense?limit=5").then((resp) => {
      setExpenses(resp.data.data.expenses);
    });
  }, []);

  const dateCreated = (cell) =>
    cell ? moment(cell).format("dddd, MMMM Do YYYY, h:mm a") : "n/a";

  const columns = [
    { dataField: "_id", text: "S/N" },
    { dataField: "amount", text: "Amount" },
    { dataField: "category.title", text: "Category" },
    { dataField: "createdAt", text: "Date", formatter: dateCreated },
    { dataField: "note", text: "Narration" },
  ];

  return (
    <>
      <div className="d-flex">
        <Aside />
        <div className="p-5 w-100">
          <div className="d-flex">
            <h3 className="mr-auto">Categories</h3>

            <button className="btn btn-outline-primary" onClick={openCModal}>
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

          <div className="d-flex mt-5">
            <h4 className="mr-auto">Latest Expenses</h4>

            <button className="btn btn-outline-primary" onClick={openModal}>
              New Expense
            </button>
          </div>
          <div className="">
            <BootstrapTable
              wrapperClasses="table-responsive"
              bordered={false}
              classes="bookings-table table-head-custom table-vertical-center mt-3 mb-3"
              id="datatable"
              keyField="createdAt"
              bootstrap4
              data={expenses}
              columns={columns}
              pagination={paginationFactory()}
            />
          </div>
        </div>
      </div>

      <NewExpense modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <NewCategory modalIsOpen={categoryModalIsOpen} closeModal={closeCModal} />
    </>
  );
}

export default Dashboard;
