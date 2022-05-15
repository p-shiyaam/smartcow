import React, { HTMLInputTypeAttribute } from "react";
import { Field } from "formik";

interface FormFieldProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  type: HTMLInputTypeAttribute;
  name: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  name,
  ...rest
}) => {
  return (
    <div className="form-field-container">
      {label && <label htmlFor="email">{label}</label>}
      <Field type={type} name={name} {...rest} />
    </div>
  );
};

export default FormField;
