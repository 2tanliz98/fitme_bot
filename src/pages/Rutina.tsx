/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import { Ejercicio } from "../types";
import { useLocation, useNavigate } from "react-router-dom";
import CircularProgress from "../components/CircularProgress__temp";
import "../scss/timer.css";

interface Rutina {
  dia: string;
  ejercicios: Ejercicio[];
}

const RutinaComponent: React.FC = () => {
  const ubicacion = useLocation();
  const navegar = useNavigate();

  const [mostrarTemporizador, setMostrarTemporizador] = useState(false);
  const [enTransicion, setEnTransicion] = useState(false);
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

  const { rutina }: { rutina: Rutina } = ubicacion.state || {
    rutina: { dia: "", ejercicios: [] },
  };

  const rutinaGuardada = sessionStorage.getItem("rutinaSeleccionada");
  let estadoInicial = { indiceEjercicioActual: 0, setActual: 0 };

  if (rutinaGuardada) {
    try {
      const datosParseados = JSON.parse(rutinaGuardada);
      if (
        typeof datosParseados.indiceEjercicioActual === "number" &&
        typeof datosParseados.setActual === "number"
      ) {
        estadoInicial = datosParseados;
      }
    } catch (e) {
      console.warn("Error al parsear rutinaSeleccionada", e);
    }
  }

  const [indiceEjercicioActual, setIndiceEjercicioActual] = useState(
    estadoInicial.indiceEjercicioActual
  );
  const [setActual, setSetActual] = useState(estadoInicial.setActual);

  const ejercicioActual = rutina.ejercicios[indiceEjercicioActual];
  const repeticionesActual =
    ejercicioActual?.repeticiones?.[
      Math.min(setActual, ejercicioActual?.repeticiones?.length - 1)
    ] ?? 0;

  useEffect(() => {
    sessionStorage.setItem(
      "rutinaSeleccionada",
      JSON.stringify({
        rutina,
        indiceEjercicioActual,
        setActual,
      })
    );
  }, [indiceEjercicioActual, setActual, rutina]);

  const alTerminarTemporizador = useCallback(() => {
    if (enTransicion) return;

    setEnTransicion(true);
    setMostrarTemporizador(false);

    setSetActual((prevSet) => {
      const siguienteSet = prevSet + 1;
      console.log(`Actualizando set de ${prevSet} a ${siguienteSet}`);

      if (siguienteSet >= ejercicioActual.sets) {
        setIndiceEjercicioActual((prevIndice) => {
          const siguienteIndice = prevIndice + 1;

          if (siguienteIndice >= rutina.ejercicios.length) {
            alert("¡Rutina completada!");
            sessionStorage.removeItem("rutinaSeleccionada");
            navegar("/home");
            return prevIndice;
          }

          return siguienteIndice;
        });

        setEnTransicion(false);
        return 0;
      }

      setEnTransicion(false);
      return siguienteSet;
    });
  }, [ejercicioActual?.sets, rutina.ejercicios.length, navegar, enTransicion]);

  const manejarSiguiente = () => {
    if (!ejercicioActual || mostrarTemporizador) return;
    setMostrarTemporizador(true);
  };

  const convertirEnlaceEmbed = (url: string): string => {
    if (!url) return "";
    const videoIdMatch = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
    );
    const videoId = videoIdMatch?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
  };

  if (!ejercicioActual) {
    return <div>No se encontró el ejercicio actual.</div>;
  }

  return (
    <div>
      <h1>Rutina de Ejercicio</h1>
      <h2>
        Ejercicio: {ejercicioActual.nombre} ({indiceEjercicioActual + 1} de{" "}
        {rutina.ejercicios.length})
      </h2>

      <p>
        {setActual + 1} de {ejercicioActual.sets} —{" "}
        {setActual < ejercicioActual.sets - 1
          ? "Siguiente set"
          : "Descansa antes del siguiente ejercicio"}
      </p>

      <p>Repeticiones para este set: {repeticionesActual}</p>

      <div style={{ margin: "1rem 0" }}>
        <p>Video explicativo:</p>
        <div
          style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
        >
          <iframe
            src={convertirEnlaceEmbed(ejercicioActual.enlaceYoutube)}
            title="Video de ejercicio"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>
      </div>

      <button
        onClick={manejarSiguiente}
        disabled={mostrarTemporizador || enTransicion}
      >
        {setActual < ejercicioActual.sets - 1
          ? "Siguiente set"
          : indiceEjercicioActual < rutina.ejercicios.length - 1
          ? "Siguiente ejercicio"
          : "Finalizar rutina"}
      </button>

      <button
        onClick={() => setMostrarConfirmacion(true)}
        disabled={enTransicion}
        style={{ marginLeft: "1rem" }}
      >
        Detener rutina
      </button>

      {mostrarTemporizador && (
        <div className="modal-overlay">
          <div className="modal-content">
            <CircularProgress
              key={`${indiceEjercicioActual}-${setActual}`}
              restTime={ejercicioActual.descanso}
              currentSet={setActual}
              currentExerciseIndex={indiceEjercicioActual}
              rutina={rutina}
              onFinish={alTerminarTemporizador}
            />
          </div>
        </div>
      )}

      {mostrarConfirmacion && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>¿Quieres detener la rutina?</p>
            <div style={{ marginTop: "1rem" }}>
              <button
                onClick={() => {
                  sessionStorage.removeItem("rutinaSeleccionada");
                  navegar("/home");
                }}
                style={{ marginRight: "1rem" }}
              >
                Salir
              </button>
              <button onClick={() => setMostrarConfirmacion(false)}>
                Continuar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RutinaComponent;
