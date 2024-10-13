import React, { useRef, useEffect, useState } from 'react';

const LivenessCheck = ({ onNext }) => {
  const videoRef = useRef(null);
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let cameraTimeout;

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

        // Check if the videoRef.current is available before setting the stream
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setStreaming(true);
          console.log('Camera stream started');
        } else {
          console.log('videoRef is null, cannot set stream');
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

    startVideoStream();

    // Timeout after 10 seconds if the camera is not streaming
    cameraTimeout = setTimeout(() => {
      if (!streaming) {
        setError('Camera is taking too long to load. Please check your device and permissions.');
      }
    }, 10000);

    return () => {
      clearTimeout(cameraTimeout); // Clear the timeout when the component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [streaming]);

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
