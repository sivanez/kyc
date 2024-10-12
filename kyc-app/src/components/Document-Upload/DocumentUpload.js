import React, { useState } from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
import FormFrame from '../../styling/FormFrame';  // Correct import path

const DocumentUpload = ({ onNext }) => {
  const [idDocument, setIdDocument] = useState(null);

  const handleFileChange = (e) => {
    setIdDocument(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (idDocument) {
      onNext({ idDocument });
    } else {
      alert('Please upload an ID document.');
    }
  };

  return (
    <FormFrame>
      <Typography variant="h6" align="center" gutterBottom>
        Upload Your Identity Document
      </Typography>

      <Box mb={3}>
        <input
          accept="image/*,application/pdf"
          type="file"
          id="document-upload"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <label htmlFor="document-upload">
          <Button variant="contained" color="primary" component="span" fullWidth>
            Choose File
          </Button>
        </label>
      </Box>

      {idDocument && (
        <Box mb={3}>
          <TextField
            fullWidth
            value={idDocument.name}
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
      )}

      <Box textAlign="center" mt={4}>
        <Button variant="contained" color="secondary" onClick={handleSubmit} fullWidth>
          Next
        </Button>
      </Box>
    </FormFrame>
  );
};

export default DocumentUpload;
