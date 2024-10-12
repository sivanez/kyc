import React, { useState } from 'react';
import PersonalInfoForm from './Personal-Info/PersonalInfoForm';
import DocumentUpload from './Document-Upload/DocumentUpload';
import ReviewSubmit from './Review-Submit/ReviewSubmit';
import LivenessCheck from './Liveness/Liveness';  // Import the liveness check component

const KYCForm = () => {
  const [step, setStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({});
  const [documentInfo, setDocumentInfo] = useState({});

  // Step 1: Handle personal info submission
  const handleNextPersonalInfo = (data) => {
    setPersonalInfo(data);
    setStep(2);
  };

  // Step 2: Handle document upload submission
  const handleNextDocumentUpload = (data) => {
    setDocumentInfo(data);
    setStep(3);
  };

  // Step 3: Handle liveness check completion
  const handleNextLivenessCheck = () => {
    setStep(4);  // Move to review step after liveness check
  };

  // Step 4: Handle final KYC submission
  const handleSubmit = () => {
    console.log({ personalInfo, documentInfo });
    alert('KYC submitted successfully!');
  };

  return (
    <div>
      {step === 1 && <PersonalInfoForm onNext={handleNextPersonalInfo} />}
      {step === 2 && <DocumentUpload onNext={handleNextDocumentUpload} />}
      {step === 3 && <LivenessCheck onNext={handleNextLivenessCheck} />}  {/* Liveness check step */}
      {step === 4 && (
        <ReviewSubmit
          personalInfo={personalInfo}
          documentInfo={documentInfo}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default KYCForm;
