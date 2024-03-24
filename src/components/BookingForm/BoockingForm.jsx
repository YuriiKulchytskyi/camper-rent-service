import React from 'react';
import { Formik, ErrorMessage } from 'formik';
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
    errors.email = 'Required email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.date) {
    errors.date = 'Required correct date';
  } else if (new Date(values.date) < new Date()) {
    errors.date = 'Booking date cannot be in the past';
  }

  // if (!values.comment) {
  //   // errors.comment = 'Required';
  // }

  return errors;
};

const onSubmit = (values, { resetForm, setSubmitting }) => {
  if (!values.name || !values.email) {
    alert('Please fill in all required fields.');
    return;
  }

  console.log(values);
  resetForm();
};

export const BookingForm = () => (
  <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
    {({ handleSubmit, isSubmitting }) => (
      <Form onSubmit={handleSubmit}>
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

        <Button type="submit" disabled={isSubmitting}>
          Send
        </Button>
      </Form>
    )}
  </Formik>
);
