import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import CustomDatePicker from './CustomDatepicker'; // Шлях до вашого власного компонента
import {
  BookingFormSpan,
  BookingFormTitle,
  BookingTitle,
  Button,
  Form,
  Input,
  InputHolder,
  TextArea,
} from './BookingForm.styled';

const initialValues = {
  name: '',
  email: '',
  date: '',
  comment: '',
};

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.date) {
    errors.date = 'Required';
  }

  if (!values.comment) {
    errors.comment = 'Required';
  }

  return errors;
};

const onSubmit = (values, { resetForm }) => {
  // Тут ви можете реалізувати логіку відправки даних, наприклад, за допомогою AJAX запиту
  console.log(values);
  resetForm();
};

export const BookingForm = () => (
  <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
    {() => (
      <Form>
        <BookingTitle>
          <BookingFormTitle>Book your campervan now</BookingFormTitle>
          <BookingFormSpan>
            Stay connected! We are always ready to help you.
          </BookingFormSpan>
        </BookingTitle>
        <InputHolder>
          <div>
            <label htmlFor="name"></label>
            <Input type="text" id="name" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <label htmlFor="email"></label>
            <Input type="email" id="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="date"></label>
            <Input type="date" id="date" name="date" placeholder="Date" />
            <ErrorMessage name="date" component="div" />
          </div>
          {/* <div>
            <label htmlFor="date">Date</label>
            <CustomDatePicker id="date" name="date" />
            <ErrorMessage name="date" component="div" />
          </div> */}

          <div>
            <label htmlFor="comment"></label>
            <TextArea
              as="textarea"
              id="comment"
              name="comment"
              placeholder="Comment"
            />
            <ErrorMessage name="comment" component="div" />
          </div>
        </InputHolder>

        <Button type="submit">Send</Button>
      </Form>
    )}
  </Formik>
);
