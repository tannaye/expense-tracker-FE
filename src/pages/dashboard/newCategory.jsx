import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import { useForm } from "react-hook-form";

import CustomInput from "../../components/CustomInput";
import CustomSelectInput from "../../components/CustomSelectInput";

import { get, post } from "../../helpers/axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: "0px",
    transform: "translate(-50%, -50%)",
    width: "310px",
    borderRadius: "10px",
    border: "1px solid #ade7b4",
  },
};

const NewCategory = ({ modalIsOpen, closeModal }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    post("/expense/category", data).then(() => {
      window.location.reload(false);
    });
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        //   onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Category Modal"
      >
        <div className="bg-light-green-gradient p-4"></div>
        <div className="bg-white p-4">
          <CustomInput
            control={control}
            name={"title"}
            id={"title"}
            label={"Title of category"}
            isRequired={true}
            errors={errors}
          />

          <div className="d-flex justify-content-center mt-4">
            <button
              className="btn btn-success"
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NewCategory;
