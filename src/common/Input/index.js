import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CommonInput = ({
  label,
  value,
  type,
  maxLength,
  onChange,
  isDate = false,
  name,
  width
}) => {
    const inputStyle = {
        width: width || '100%'
      };

  const handleChange = (event) => {
    const { value } = event.target;
    onChange(value);
  };

  const handleDateChange = (date) => {
    onChange(date);
  };

  if (isDate) {
    return (
      <Form.Group as={Col} controlId={label}>
        <Form.Label>{label}</Form.Label>
        <div>
          <DatePicker
            selected={value}
            onChange={handleDateChange}
            className="form-control"
            showYearDropdown
            dateFormatCalendar="MMMM"
            yearDropdownItemNumber={70}
            scrollableYearDropdown
            isClearable
          />
        </div>
      </Form.Group>
    );
  }

  return (
    <Form.Group as={Col} controlId={label}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        style={inputStyle}
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        maxLength={maxLength}
        className="form-control"
      />
    </Form.Group>
  );
};

export default CommonInput;
