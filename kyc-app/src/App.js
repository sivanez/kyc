import React from 'react';
import './App.css';
import KYCForm from './components/KYCForm';
import Header from './components/Header';  // Import the Header component

function App() {
  return (
    <div className="App">
      <Header />  {/* Header stays at the top */}
      <div className="centered-container">
        <main>
          <KYCForm />  {/* Centered KYC form */}
        </main>
      </div>
    </div>
  );
}

export default App;
