import React, { useRef, useEffect, useState } from 'react';

const LivenessCheck = ({ onNext }) => {
  const videoRef = useRef(null);
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Access the webcam or mobile camera
    const startVideoStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'user',  // 'user' ensures the front-facing camera is used on mobile devices
          },
        });
        videoRef.current.srcObject = stream;
        setStreaming(true);
      } catch (err) {
        console.error("Error accessing camera: ", err);

        // Specific error messages
        if (err.name === 'NotAllowedError') {
          setError('Camera access denied. Please enable camera permissions.');
        } else if (err.name === 'NotFoundError') {
          setError('No camera found on this device.');
        } else if (err.name === 'NotReadableError') {
          setError('Camera is currently being used by another application.');
        } else {
          setError('Unable to access the camera. Please grant permission and try again.');
        }

        setStreaming(false);
      }
    };

    startVideoStream();

    // Stop the camera stream when the component unmounts
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        let tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const handleLivenessCheck = () => {
    if (streaming) {
      alert("Liveness check complete!");
      onNext();  // Proceed to the next step
    } else {
      alert("No active camera stream detected.");
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Liveness Check</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {streaming ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{ width: '100%', maxWidth: '400px', borderRadius: '10px', border: '2px solid #ddd' }}
          />
          <div style={{ marginTop: '20px' }}>
            <button
              onClick={handleLivenessCheck}
              style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
            >
              Confirm Liveness
            </button>
          </div>
        </>
      ) : (
        <p>Loading camera...</p>
      )}
    </div>
  );
};

export default LivenessCheck;
