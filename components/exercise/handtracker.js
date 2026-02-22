"use client";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision";

const HandTracker = ({ onFeedbackUpdate }) => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadModel = async () => {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm",
      );

      const handLandmarker = await HandLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",
          delegate: "GPU",
        },
        numHands: 1,
        runningMode: "VIDEO",
      });

      setLoaded(true);
      startDetection(handLandmarker);
    };

    loadModel();
  }, []);

  const startDetection = (landmarker) => {
    const detect = () => {
      if (webcamRef.current && webcamRef.current.video.readyState === 4) {
        const video = webcamRef.current.video;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Match canvas size to video size
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const startTimeMs = performance.now();
        const results = landmarker.detectForVideo(video, startTimeMs);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (results.landmarks && results.landmarks.length > 0) {
          const landmarks = results.landmarks[0];

          // Draw landmarks
          ctx.fillStyle = "#22c55e"; // Green dots
          landmarks.forEach((point) => {
            ctx.beginPath();
            ctx.arc(
              point.x * canvas.width,
              point.y * canvas.height,
              6,
              0,
              2 * Math.PI,
            );
            ctx.fill();
          });

          // Simple Logic: Detect Fist vs Open Hand
          // Compare Tip of Index Finger (8) with Base of Index Finger (5)
          const isFist = landmarks[8].y > landmarks[5].y;

          // Send data back to the parent page
          if (onFeedbackUpdate) {
            onFeedbackUpdate(isFist ? "Fist (Closed)" : "Open Hand");
          }
        }
      }
      requestAnimationFrame(detect);
    };
    detect();
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg border-4 border-blue-100 bg-black">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center text-white z-10 bg-black/50">
          Loading AI Model...
        </div>
      )}
      <Webcam ref={webcamRef} className="w-full" mirrored={true} />
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
};

export default HandTracker;
