import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Box } from '@mui/material';
import FormFrame from '../../styling/FormFrame';  // Correct import path

const PersonalInfoForm = ({ onNext }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
  });

  return (
    <Formik
      initialValues={{ name: '', email: '', phoneNumber: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onNext(values);
      }}
    >
      {({ errors, touched }) => (
        <FormFrame>
          <Form>
            <Typography variant="h6" align="center" gutterBottom>
              Personal Information
            </Typography>

            <Box mb={3}>
              <Field
                name="name"
                as={TextField}
                label="Name"
                fullWidth
                error={touched.name && !!errors.name}
                helperText={<ErrorMessage name="name" />}
              />
            </Box>

            <Box mb={3}>
              <Field
                name="email"
                as={TextField}
                label="Email"
                fullWidth
                error={touched.email && !!errors.email}
                helperText={<ErrorMessage name="email" />}
              />
            </Box>

            <Box mb={3}>
              <Field
                name="phoneNumber"
                as={TextField}
                label="Phone Number"
                fullWidth
                error={touched.phoneNumber && !!errors.phoneNumber}
                helperText={<ErrorMessage name="phoneNumber" />}
              />
            </Box>

            <Box textAlign="center" mt={4}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Next
              </Button>
            </Box>
          </Form>
        </FormFrame>
      )}
    </Formik>
  );
};

export default PersonalInfoForm;
