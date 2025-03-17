import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../scss/timer.css";

const CircularProgress = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Obtener el estado de la rutina y el tiempo de descanso
  const { restTime, currentExerciseIndex, currentSet, rutina } =
    location.state || {
      restTime: 5,
      currentExerciseIndex: 0,
      currentSet: 0,
      rutina: { ejercicios: [] },
    };

  const [timeLeft, setTimeLeft] = useState(restTime); // Estado para el tiempo restante
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = (timeLeft / restTime) * circumference;

  // Usar un efecto para iniciar y gestionar el temporizador
  useEffect(() => {
    // Evitar reiniciar el temporizador si el valor de 'timeLeft' ya es 0
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prevTime: number) => {
        if (prevTime <= 1) {
          clearInterval(interval); // Detener el temporizador
          console.log("Current set: ", currentSet);
          console.log("currentExerciseIndex: ", currentExerciseIndex);
          // Cuando el cronómetro termine, redirigir a la rutina con el siguiente set
          if (currentSet < rutina.ejercicios[currentExerciseIndex].sets - 1) {
            console.log("redirigir a la rutina con el siguiente set");
            navigate("/rutina", {
              state: {
                rutina,
                currentExerciseIndex,
                currentSet: currentSet + 1, // Incrementar el set
              },
            });
          } else if (currentExerciseIndex < rutina.ejercicios.length - 1) {
            console.log("redirigir a la rutina con el siguiente ejercicio");
            navigate("/rutina", {
              state: {
                rutina,
                currentExerciseIndex: currentExerciseIndex + 1, // Siguiente ejercicio
                currentSet: 0, // Reiniciar los sets para el nuevo ejercicio
              },
            });
          } else {
            alert("¡Rutina completada!");
            navigate("/home"); // Si ya no hay más ejercicios, redirigir al inicio
          }
          return 0; // Finalizar el tiempo
        }
        return prevTime - 1;
      });
    }, 1000); // Actualizar cada segundo

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, [timeLeft, restTime, currentExerciseIndex, currentSet, navigate, rutina]);

  return (
    <div className="circular-container">
      <svg className="timer-svg" width="100" height="100" viewBox="0 0 100 100">
        {/* Círculo de fondo */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#e0e0e0"
          strokeWidth="8"
          fill="none"
        />
        {/* Círculo de progreso */}
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
  );
};

export default CircularProgress;
