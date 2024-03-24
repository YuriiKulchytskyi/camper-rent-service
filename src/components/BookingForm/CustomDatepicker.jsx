import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ field, form, ...props }) => {
  const handleChange = date => {
    form.setFieldValue(field.name, date, true);
  };

  return (
    <DatePicker
      {...field}
      {...props}
      selected={field.value ? new Date(field.value) : null}
      onChange={handleChange}
      dateFormat="yyyy-MM-dd"
      placeholderText="Select Date"
    />
  );
};

export default CustomDatePicker;
