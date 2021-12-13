import React, { forwardRef, useState } from "react";
import { string, bool, func, array, object } from "prop-types";
import "../CustomInput/index.css";
import { Controller } from "react-hook-form";

const CustomSelectInput = ({
  options,
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
    <div className="w-100 mb-3">
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
            <select
              className="form-control custom-input"
              value={value}
              onChange={(val) => onChange(val)}
              placeholder={placeholder}
              disabled={isDisabled}
            >
              <option>please select...</option>
              {options.map((option, id) => {
                return (
                  <option value={option._id} key={id}>
                    {option.title}
                  </option>
                );
              })}
            </select>
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

CustomSelectInput.propTypes = {
  options: array.isRequired,
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

CustomSelectInput.displayName = "CustomSelectInput";

export default CustomSelectInput;
