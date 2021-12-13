import React, { forwardRef, useState } from "react";
import { string, bool, func, object } from "prop-types";
import "./index.css";
import { Controller } from "react-hook-form";

const CustomInput = ({
  control,
  name,
  id,
  label,
  isRequired,
  isDisabled,
  type,
  placeholder,
  icon,
  errors,
  defaultValue,
}) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className=" mb-3">
      <label className="d-block input-label" htmlFor={id}>
        {label}
        {/* {isRequired && <span className="co-lightred"> * </span>} */}
      </label>
      <div className="">
        <Controller
          control={control}
          defaultValue={defaultValue}
          name={name}
          rules={{
            required: isRequired ? true : false,
          }}
          render={({ field: { onChange, value } }) => (
            <input
              className="form-control custom-input"
              type={
                type === "password"
                  ? passwordShown
                    ? "text"
                    : "password"
                  : type
              }
              value={value}
              onChange={(val) => onChange(val)}
              placeholder={placeholder}
              disabled={isDisabled}
            />
          )}
        />
      </div>
      {errors[name] && (
        <div className="mt-2 error-text">
          <p>{label ? label : name} is required.</p>
        </div>
      )}
    </div>
  );
};

CustomInput.propTypes = {
  control: object,
  name: string.isRequired,
  id: string.isRequired,
  label: string,
  isRequired: bool,
  isDisabled: bool,
  type: string,
  placeholder: string,
  icon: string,
  errors: object,
  defaultValue: string,
};

CustomInput.displayName = "CustomInput";

export default CustomInput;
