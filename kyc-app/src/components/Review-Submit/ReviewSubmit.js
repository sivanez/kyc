import React from 'react';
import { Box, Button, Typography, Divider } from '@mui/material';
import FormFrame from '../../styling/FormFrame';  // Correct import path

const ReviewSubmit = ({ personalInfo, documentInfo, onSubmit }) => {
  const { name, email, phoneNumber } = personalInfo;
  const { idDocument } = documentInfo;

  return (
    <FormFrame>
      <Typography variant="h6" align="center" gutterBottom>
        Review Your Details
      </Typography>

      <Box mb={3}>
        <Typography variant="subtitle1">
          <strong>Name:</strong>
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {name}
        </Typography>
        <Divider sx={{ mt: 2 }} />
      </Box>

      <Box mb={3}>
        <Typography variant="subtitle1">
          <strong>Email:</strong>
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {email}
        </Typography>
        <Divider sx={{ mt: 2 }} />
      </Box>

      <Box mb={3}>
        <Typography variant="subtitle1">
          <strong>Phone Number:</strong>
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {phoneNumber}
        </Typography>
        <Divider sx={{ mt: 2 }} />
      </Box>

      <Box mb={3}>
        <Typography variant="subtitle1">
          <strong>Uploaded Document:</strong>
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {idDocument ? idDocument.name : 'No document uploaded'}
        </Typography>
        <Divider sx={{ mt: 2 }} />
      </Box>

      <Box textAlign="center" mt={4}>
        <Button variant="contained" color="primary" onClick={onSubmit} fullWidth>
          Submit
        </Button>
      </Box>
    </FormFrame>
  );
};

export default ReviewSubmit;
