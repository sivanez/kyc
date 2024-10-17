import React, { useState } from 'react';

const PersonalInfoForm = ({ onNext }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    nationality: '',
    documentType: '',
    documentNumber: '',
    gender: '',
    occupation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onNext(formData); // Pass form data to next step
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Personal Information</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>State</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Postal Code</label>
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Nationality</label>
        <input
          type="text"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Document Type</label>
        <select
          name="documentType"
          value={formData.documentType}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="Passport">Passport</option>
          <option value="Driver's License">Driver's License</option>
          <option value="National ID">National ID</option>
        </select>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Document Number</label>
        <input
          type="text"
          name="documentNumber"
          value={formData.documentNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Occupation</label>
        <input
          type="text"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" style={{ padding: '10px 20px' }}>Next</button>
    </form>
  );
};

export default PersonalInfoForm;
