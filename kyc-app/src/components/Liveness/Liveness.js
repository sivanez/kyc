import React, { useRef, useEffect, useState } from 'react';

const LivenessCheck = ({ onNext }) => {
  const videoRef = useRef(null);
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState('');

  // Start the video stream once the component and the video element have been rendered
  useEffect(() => {
    const startVideoStream = async () => {
      try {
        console.log('Attempting to access camera...');
        // Check if mediaDevices and getUserMedia are available
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          throw new Error("getUserMedia is not supported by this browser.");
        }

        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'user', // Front-facing camera for mobile devices
          },
        });

        // Wait until the video element is rendered, then assign the stream
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setStreaming(true);
          console.log('Camera stream started');
        } else {
          console.log('Waiting for video element to render...');
        }
      } catch (err) {
        console.error("Error accessing camera: ", err);

        if (err.name === 'NotAllowedError') {
          setError('Camera access denied. Please enable camera permissions.');
        } else if (err.name === 'NotFoundError') {
          setError('No camera found on this device.');
        } else if (err.name === 'NotReadableError') {
          setError('Camera is currently being used by another application.');
        } else if (err.message.includes('getUserMedia is not supported')) {
          setError('This browser does not support the camera.');
        } else {
          setError('Unable to access the camera. Please grant permission and try again.');
        }

        setStreaming(false);
      }
    };

    if (videoRef.current) {
      startVideoStream();
    } else {
      console.log("videoRef is not yet available, waiting...");
    }

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [videoRef.current]);  // Re-run this effect when videoRef.current changes


  const handleLivenessCheck = () => {
    if (streaming) {
      alert("Liveness check complete!");
      onNext(); // Proceed to the next step
    } else {
      alert("No active camera stream detected.");
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Liveness Check</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
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
    </div>
  );
};

export default LivenessCheck;
