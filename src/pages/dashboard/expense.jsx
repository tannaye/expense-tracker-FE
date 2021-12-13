import React, { useEffect, useState } from "react";
import { get } from "../../helpers/axios";
import Aside from "./aside";
import moment from "moment";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import NewExpense from "./newExpense";

function Expense() {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    get("expense").then((resp) => {
      setExpenses(resp.data.data.expenses);
      setTotal(resp.data.data.total);
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
    <div>
      <div className="d-flex">
        <Aside />
        <div className="p-5 w-100">
          <div className="row">
            <div className="col-lg-3 mb-4">
              <div className="category-card p-2">
                <p className="fs-20">Total Expenses</p>

                <p className="fs-20">
                  {" "}
                  ₦{new Intl.NumberFormat("en-US").format(total)}
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex mt-5">
            <h4 className="mr-auto">Expenses</h4>

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
    </div>
  );
}

export default Expense;
