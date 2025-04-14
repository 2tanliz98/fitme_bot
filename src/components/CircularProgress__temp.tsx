/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";

interface Props {
  restTime: number;
  onFinish: () => void;
}

const CircularProgress: React.FC<Props> = ({
  restTime,
  onFinish,
}) => {
  const [timeLeft, setTimeLeft] = useState(restTime);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = (timeLeft / restTime) * circumference;

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          onFinish();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, restTime, onFinish]);

  return (
    <div className="circular-container">
      <p className="modal-title">Tiempo para recuperarte</p>

      <div>
        <svg
          className="timer-svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#e0e0e0"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#72EDF2" />
              <stop offset="100%" stopColor="#5151E5" />
            </linearGradient>
          </defs>
        </svg>
        <span className="timer-text">{timeLeft}</span>
      </div>
    </div>
  );
};

export default CircularProgress;
