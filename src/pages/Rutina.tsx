import React, { useState, useEffect } from "react";
import { Ejercicio } from "../types";
import { useLocation, useNavigate } from "react-router-dom";

interface Rutina {
  dia: string;
  ejercicios: Ejercicio[];
}

const Routine: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { rutina }: { rutina: Rutina } = location.state || {
    rutina: { dia: "", ejercicios: [] },
  };

  // Recuperar el estado de la rutina desde sessionStorage
  const storedState = sessionStorage.getItem("rutinaState");
  console.log(storedState);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(
    storedState ? JSON.parse(storedState).currentExerciseIndex : 0
  );
  const [currentSet, setCurrentSet] = useState(
    storedState ? JSON.parse(storedState).currentSet : 0
  );

  const currentExercise = rutina.ejercicios[currentExerciseIndex];
  const repetitionsForCurrentSet = currentExercise.repeticiones[currentSet];

  useEffect(() => {
    // Si el estado ha sido actualizado, guarda el nuevo estado en sessionStorage
    sessionStorage.setItem(
      "rutinaState",
      JSON.stringify({
        rutina,
        currentExerciseIndex,
        currentSet,
      })
    );
  }, [currentExerciseIndex, currentSet, rutina]);

  const handleNextExercise = () => {
    const currentExercise = rutina.ejercicios[currentExerciseIndex];

    console.log("Current set: ", currentSet);
    console.log("currentExercise set: ", currentExercise.sets - 1);
    console.log("currentExerciseIndex: ", currentExerciseIndex);
    // Si hemos completado todos los sets de un ejercicio, pasamos al siguiente ejercicio
    if (currentSet >= currentExercise.sets - 1) {
      // Primero, actualizamos el estado local
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setCurrentSet(0); // Reiniciar los sets para el siguiente ejercicio

      // Guardar el estado actualizado en sessionStorage
      sessionStorage.setItem(
        "rutinaState",
        JSON.stringify({
          rutina,
          currentExerciseIndex: currentExerciseIndex + 1,
          currentSet: 0,
        })
      );

      console.log("rutina.ejercicios.length: ", rutina.ejercicios.length);
      console.log("pasamos al siguiente ejercicio desde routine");

      // Verificar si hay más ejercicios
      if (currentExerciseIndex < rutina.ejercicios.length - 1) {
        console.log("pasamos al siguiente ejercicio");
      } else {
        alert("¡Rutina completada!");
        navigate("/home"); // Redirigir al inicio si ya no hay más ejercicios
      }
    } else {
      console.log("pasamos al siguiente set desde routine");
      setCurrentSet(currentSet + 1); // Pasar al siguiente set

      // Guardar el estado actualizado en sessionStorage
      sessionStorage.setItem(
        "rutinaState",
        JSON.stringify({
          rutina,
          currentExerciseIndex,
          currentSet: currentSet + 1,
        })
      );
    }

    // Iniciar el descanso después de cada set
    const nextRestTime = currentExercise.descanso;
    navigate("/cronometro", {
      state: {
        restTime: nextRestTime, // Tiempo de descanso
        currentExerciseIndex,
        currentSet: currentSet + 1, // Avanzar el set antes de ir al cronómetro
        rutina,
      },
    });
  };

  return (
    <div>
      <h1>Rutina de Ejercicio</h1>
      <h2>Ejercicio: {currentExercise.nombre}</h2>
      <p>Material: {currentExercise.material}</p>
      <p>Repeticiones para este set: {repetitionsForCurrentSet}</p>
      <p>
        Enlace de YouTube:{" "}
        <a
          href={currentExercise.enlaceYoutube}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver ejercicio
        </a>
      </p>

      <button onClick={handleNextExercise}>
        {currentSet < currentExercise.sets - 1
          ? "Siguiente set"
          : "Finalizar ejercicio"}
      </button>
    </div>
  );
};

export default Routine;
